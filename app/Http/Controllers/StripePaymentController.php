<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Charge;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\Log;

class StripePaymentController extends Controller
{
    public function index()
    {
        return inertia('Payment', [
            'stripePublicKey' => config('services.stripe.key', env('STRIPE_KEY')), // Use config for better practice
        ]);
    }

    public function createIntent(Request $request)
    {
        Stripe::setApiKey(config('services.stripe.secret', env('STRIPE_SECRET')));

        $amount = 26500; // R$265.00 in centavos

        $intent = PaymentIntent::create([
            'amount' => $amount,
            'currency' => 'brl',
            'description' => 'Pagamento de serviço',
        ]);

        return response()->json([
            'clientSecret' => $intent->client_secret,
        ]);
    }

    public function process(Request $request)
    {
        $request->validate([
            'payment_method_id' => 'required|string',
            'card_name' => 'required|string',
            'service_id' => 'required|integer',
        ]);

        // Validate Stripe configuration
        $stripeSecret = config('services.stripe.secret', env('STRIPE_SECRET'));
        if (!$stripeSecret || !str_starts_with($stripeSecret, 'sk_')) {
            Log::error('Invalid Stripe secret key configuration');
            return back()->withErrors(['error' => 'Payment configuration error. Please contact support.']);
        }

        Stripe::setApiKey($stripeSecret);

        try {
            // Get the service details (you should fetch this from your database)
            $service = $this->getServiceById($request->service_id);

            if (!$service) {
                return back()->withErrors(['error' => 'Service not found']);
            }

            $amount = ($service['price'] + $service['service_fee']) * 100; // Convert to cents

            // Create and confirm payment intent
            $paymentIntent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'brl', // Using Brazilian Real (BRL)
                'payment_method' => $request->payment_method_id,
                'confirmation_method' => 'manual',
                'confirm' => true,
                'return_url' => route('payment.success'),
                'description' => 'Payment for service: ' . $service['name'],
                'metadata' => [
                    'service_id' => $request->service_id,
                    'user_id' => auth()->id(),
                    'cardholder_name' => $request->card_name,
                ],
            ]);

            if ($paymentIntent->status === 'succeeded') {
                // Log successful payment
                Log::info('Payment successful', [
                    'payment_intent_id' => $paymentIntent->id,
                    'amount' => $amount,
                    'user_id' => auth()->id(),
                    'service_id' => $request->service_id,
                ]);

                // Here you can save the payment to your database
                $this->savePaymentRecord($paymentIntent, $request);

                return redirect()->route('payment.success')->with('success', 'Payment successful!');

            } else if ($paymentIntent->status === 'requires_action') {
                // Handle 3D Secure or other actions
                return response()->json([
                    'requires_action' => true,
                    'payment_intent' => [
                        'id' => $paymentIntent->id,
                        'client_secret' => $paymentIntent->client_secret
                    ]
                ]);
            } else {
                return back()->withErrors(['error' => 'Payment failed. Please try again.']);
            }

        } catch (\Stripe\Exception\CardException $e) {
            // Card was declined
            Log::error('Card declined: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Your card was declined: ' . $e->getDeclineCode()]);
        } catch (\Stripe\Exception\RateLimitException $e) {
            // Too many requests made to the API too quickly
            Log::error('Stripe rate limit: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Rate limit error. Please try again.']);
        } catch (\Stripe\Exception\InvalidRequestException $e) {
            // Invalid parameters were supplied to Stripe's API
            Log::error('Invalid Stripe request: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Invalid request: ' . $e->getMessage()]);
        } catch (\Stripe\Exception\AuthenticationException $e) {
            // Authentication with Stripe's API failed
            Log::error('Stripe authentication failed: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Payment configuration error. Please contact support.']);
        } catch (\Stripe\Exception\ApiConnectionException $e) {
            // Network communication with Stripe failed
            Log::error('Stripe API connection error: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Network error. Please try again.']);
        } catch (\Stripe\Exception\ApiErrorException $e) {
            // Generic error
            Log::error('Stripe API error: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Payment failed: ' . $e->getMessage()]);
        } catch (\Exception $e) {
            // Something else happened
            Log::error('Payment error: ' . $e->getMessage());
            return back()->withErrors(['error' => 'An unexpected error occurred. Please try again.']);
        }
    }

    /**
     * Get service details by ID
     * Replace this with actual database query
     */
    private function getServiceById($serviceId)
    {
        // This should fetch from your database
        // For now, returning default service
        return [
            'id' => 1,
            'name' => 'Logo Design — Basic Pack',
            'description' => 'Professional logo design with 3 concepts and unlimited revisions',
            'freelancer' => 'Ana Silva',
            'delivery_time' => '5 business days',
            'price' => 250.0,
            'service_fee' => 15.0,
        ];
    }

    /**
     * Save payment record to database
     */
    private function savePaymentRecord($paymentIntent, $request)
    {
        // Save payment details to your payments table
        // Example:
        /*
        Payment::create([
            'user_id' => auth()->id(),
            'service_id' => $request->service_id,
            'stripe_payment_intent_id' => $paymentIntent->id,
            'amount' => $paymentIntent->amount / 100, // Convert back from cents
            'currency' => $paymentIntent->currency,
            'status' => 'completed',
            'cardholder_name' => $request->card_name,
        ]);
        */
    }
}
