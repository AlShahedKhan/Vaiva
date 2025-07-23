import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { router } from '@inertiajs/react';
import { CreditCard, Shield } from 'lucide-react';

interface Service {
    id: number;
    name: string;
    description: string;
    freelancer: string;
    deliveryTime: string;
    price: number;
    serviceFee: number;
}

interface PaymentFormProps {
    service: Service;
}

const PaymentForm = ({ service }: PaymentFormProps) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardholderName, setCardholderName] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                fontSize: '16px',
                color: '#374151',
                '::placeholder': {
                    color: '#9CA3AF',
                },
            },
            invalid: {
                color: '#EF4444',
                iconColor: '#EF4444',
            },
        },
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        if (!cardholderName) {
            setError('Please enter the cardholder name');
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            const cardElement = elements.getElement(CardElement);
            if (!cardElement) {
                throw new Error('Card element not found');
            }

            const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: cardholderName,
                },
            });

            if (stripeError) {
                throw stripeError;
            }

            if (!paymentMethod) {
                throw new Error('Failed to create payment method');
            }

            // Send to your backend
            router.post('/payment/process', {
                payment_method_id: paymentMethod.id,
                service_id: service.id,
                card_name: cardholderName,
            }, {
                onSuccess: () => {
                    setIsProcessing(false);
                    // Clear form
                    setCardholderName('');
                    cardElement.clear();
                },
                onError: (errors) => {
                    setIsProcessing(false);
                    setError(errors.error || 'Payment failed. Please try again.');
                },
            });
        } catch (e: any) {
            setIsProcessing(false);
            setError(e.message || 'Payment failed. Please try again.');
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center mb-6">
                <CreditCard className="h-6 w-6 text-purple-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Card Payment</h2>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Cardholder Name */}
                <div>
                    <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name
                    </label>
                    <input
                        id="cardholderName"
                        type="text"
                        value={cardholderName}
                        onChange={(e) => setCardholderName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Name on card"
                        required
                    />
                </div>

                {/* Stripe Card Element */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Details
                    </label>
                    <div className="w-full px-4 py-3 border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-colors">
                        <CardElement options={CARD_ELEMENT_OPTIONS} />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!stripe || isProcessing}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center"
                >
                    {isProcessing ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Processing...
                        </>
                    ) : (
                        'Confirmar e Pagar'
                    )}
                </button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 flex items-center text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-2" />
                Your payment information is encrypted and secure
            </div>
        </div>
    );
};

export default PaymentForm;
