import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { CreditCard, Shield, Clock, Package } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";

// Add Stripe types
declare global {
    interface Window {
        Stripe?: (key: string) => any;
    }
}

interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

interface Service {
    id: number;
    name: string;
    description: string;
    freelancer: string;
    deliveryTime: string;
    price: number;
    serviceFee: number;
}

interface PageProps {
    user: User;
    currentService?: Service;
    stripePublicKey?: string;
    [key: string]: any;
}

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, currentService, notifications = 3, messages = 2 } = usePage<PageProps>().props;

    // Default service data if not provided from backend
    const defaultService: Service = {
        id: 1,
        name: "Logo Design — Basic Pack",
        description: "Professional logo design with 3 concepts and unlimited revisions",
        freelancer: "Ana Silva",
        deliveryTime: "5 business days",
        price: 250.0,
        serviceFee: 15.0,
    };

    const service = currentService || defaultService;

    const [cardholderName, setCardholderName] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [stripe, setStripe] = useState<any>(null);
    const [elements, setElements] = useState<any>(null);
    const [cardNumberElement, setCardNumberElement] = useState<any>(null);
    const [cardExpiryElement, setCardExpiryElement] = useState<any>(null);
    const [cardCvcElement, setCardCvcElement] = useState<any>(null);
    const [cardError, setCardError] = useState<string>("");
    const [isStripeLoaded, setIsStripeLoaded] = useState(false);

    // Initialize Stripe Elements
    useEffect(() => {
        const loadStripe = async () => {
            const publicKey = stripePublicKey || 'pk_test_51QUMErDgYV6zJ17v6MyFnaLZiK7jllm3Lsdq1OmxVbWZowVAWaoOy9CDjrde2byDyiPmaJ6xudcpPkpGsH7Oo0RU00mavjYxpt';

            try {
                if (typeof window !== 'undefined') {
                    if (window.Stripe) {
                        const stripeInstance = window.Stripe(publicKey);
                        if (stripeInstance) {
                            initializeStripeElements(stripeInstance);
                        }
                    } else {
                        // Load Stripe script if not already loaded
                        const script = document.createElement('script');
                        script.src = 'https://js.stripe.com/v3/';
                        script.onload = () => {
                            try {
                                const stripeInstance = window.Stripe?.(publicKey);
                                if (stripeInstance) {
                                    initializeStripeElements(stripeInstance);
                                } else {
                                    throw new Error('Failed to initialize Stripe instance');
                                }
                            } catch (error) {
                                console.error('Error initializing Stripe:', error);
                                setCardError("Failed to initialize payment system. Please refresh the page.");
                            }
                        };
                        script.onerror = () => {
                            setCardError("Failed to load payment system. Please check your internet connection.");
                        };
                        document.head.appendChild(script);
                    }
                }
            } catch (error) {
                console.error('Error loading Stripe:', error);
                setCardError("Failed to initialize payment system.");
            }
        };

        const initializeStripeElements = (stripeInstance: any) => {
            setStripe(stripeInstance);

            // Create elements instance with updated styling
            const elementsInstance = stripeInstance.elements({
                appearance: {
                    theme: 'stripe',
                    variables: {
                        colorPrimary: '#7c3aed',
                        colorBackground: '#ffffff',
                        colorText: '#374151',
                        colorDanger: '#ef4444',
                        fontFamily: 'system-ui, sans-serif',
                        fontSizeBase: '16px',
                        spacingUnit: '4px',
                        borderRadius: '12px',
                    },
                    rules: {
                        '.Input': {
                            padding: '12px 16px',
                            border: '1px solid #d1d5db',
                            borderRadius: '12px',
                            backgroundColor: '#ffffff',
                            boxShadow: 'none',
                        },
                        '.Input:focus': {
                            outline: 'none',
                            borderColor: '#7c3aed',
                            boxShadow: '0 0 0 3px rgba(124, 58, 237, 0.1)',
                        },
                        '.Input--invalid': {
                            borderColor: '#ef4444',
                        }
                    }
                }
            });

            setElements(elementsInstance);

            // Create individual elements with proper styling
            const cardNumber = elementsInstance.create('cardNumber', {
                placeholder: '1234 5678 9012 3456',
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#374151',
                        fontFamily: 'system-ui, sans-serif',
                        '::placeholder': {
                            color: '#9ca3af',
                        },
                    },
                    invalid: {
                        color: '#ef4444',
                    },
                },
            });

            const cardExpiry = elementsInstance.create('cardExpiry', {
                placeholder: 'MM/YY',
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#374151',
                        fontFamily: 'system-ui, sans-serif',
                        '::placeholder': {
                            color: '#9ca3af',
                        },
                    },
                    invalid: {
                        color: '#ef4444',
                    },
                },
            });

            const cardCvc = elementsInstance.create('cardCvc', {
                placeholder: '123',
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#374151',
                        fontFamily: 'system-ui, sans-serif',
                        '::placeholder': {
                            color: '#9ca3af',
                        },
                    },
                    invalid: {
                        color: '#ef4444',
                    },
                },
            });

            // Mount the elements
            cardNumber.mount('#card-number-element');
            cardExpiry.mount('#card-expiry-element');
            cardCvc.mount('#card-cvc-element');

            setCardNumberElement(cardNumber);
            setCardExpiryElement(cardExpiry);
            setCardCvcElement(cardCvc);

            // Listen for real-time validation errors
            const handleChange = ({ error }: any) => {
                setCardError(error ? error.message : '');
            };

            cardNumber.on('change', handleChange);
            cardExpiry.on('change', handleChange);
            cardCvc.on('change', handleChange);

            setIsStripeLoaded(true);
        };

        loadStripe();

        // Cleanup function
        return () => {
            if (cardNumberElement) {
                cardNumberElement.unmount();
            }
            if (cardExpiryElement) {
                cardExpiryElement.unmount();
            }
            if (cardCvcElement) {
                cardCvcElement.unmount();
            }
        };
    }, [stripePublicKey]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements || !cardNumberElement || !isStripeLoaded) {
            setCardError("Payment system is not ready. Please wait or refresh the page.");
            return;
        }

        if (!cardholderName.trim()) {
            setCardError("Please enter the cardholder name");
            return;
        }

        setIsProcessing(true);
        setCardError("");

        try {
            // Create payment method using Stripe Elements
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardNumberElement,
                billing_details: {
                    name: cardholderName.trim(),
                },
            });

            if (error) {
                console.error('Stripe error:', error);
                setCardError(error.message || "Payment failed. Please try again.");
                setIsProcessing(false);
                return;
            }

            if (!paymentMethod) {
                setCardError("Failed to create payment method. Please try again.");
                setIsProcessing(false);
                return;
            }

            // Send payment method to backend
            router.post(
                "/payment/process",
                {
                    service_id: service.id,
                    payment_method_id: paymentMethod.id,
                    card_name: cardholderName.trim(),
                },
                {
                    onSuccess: (response) => {
                        setIsProcessing(false);
                        // Clear form
                        setCardholderName("");
                        if (cardNumberElement) cardNumberElement.clear();
                        if (cardExpiryElement) cardExpiryElement.clear();
                        if (cardCvcElement) cardCvcElement.clear();
                        // Handle success - maybe redirect or show success message
                    },
                    onError: (errors) => {
                        setIsProcessing(false);
                        console.error("Payment backend error:", errors);

                        if (errors.error) {
                            setCardError(errors.error);
                        } else if (errors.message) {
                            setCardError(errors.message);
                        } else {
                            setCardError("Payment failed. Please try again.");
                        }
                    },
                }
            );
        } catch (error: any) {
            console.error('Payment processing error:', error);
            setIsProcessing(false);
            setCardError(error.message || "An unexpected error occurred. Please try again.");
        }
    };

    const total = service.price + service.serviceFee;

    return (
        <div className="flex ">
            <Sidebar
                notifications={notifications}
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />
            {/* Content wrapper with left margin equal to sidebar width */}
            <div className="flex-1">
                 <Header
                    user={user}
                    notifications={notifications}
                    messages={messages}
                    onMenuButtonClick={() => setIsSidebarOpen(true)} // Toggle sidebar open
                />
                <main className="flex-1 p-4 sm:p-6 lg:p-8" role="main">
                    <div className="">
                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                Finalizar Pedido
                            </h1>
                            <p className="text-gray-600">
                                Complete your payment to start working with your selected freelancer
                            </p>
                        </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Payment Form */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
                            <div className="flex items-center mb-6">
                                <CreditCard className="h-6 w-6 text-purple-600 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-900">Card Payment</h2>
                            </div>

                            {/* Stripe Loading Status */}
                            {!isStripeLoaded && !cardError && (
                                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-sm text-blue-600">Loading payment system...</p>
                                </div>
                            )}

                            {/* Error Message */}
                            {cardError && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-sm text-red-600">{cardError}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Card Number - Stripe Element */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 ">
                                        Card Number
                                    </label>
                                    <div
                                        id="card-number-element"
                                        className="w-full border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-colors min-h-[48px]"
                                    >
                                    </div>
                                </div>

                                {/* Card Name */}
                                <div>
                                    <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Cardholder Name
                                    </label>
                                    <input
                                        id="cardholderName"
                                        type="text"
                                        placeholder="John Doe"
                                        value={cardholderName}
                                        onChange={(e) => setCardholderName(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                        required
                                        disabled={!isStripeLoaded}
                                    />
                                </div>

                                {/* Expiry Date and CVV - Stripe Elements */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Expiry Date
                                        </label>
                                        <div
                                            id="card-expiry-element"
                                            className="w-full border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-colors min-h-[48px]"
                                        >
                                            {/* Stripe Card Expiry Element will mount here */}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            CVV
                                        </label>
                                        <div
                                            id="card-cvc-element"
                                            className="w-full border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-colors min-h-[48px]"
                                        >
                                            {/* Stripe Card CVC Element will mount here */}
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isProcessing || !stripe || !isStripeLoaded}
                                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center"
                                >
                                    {isProcessing ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Processing...
                                        </>
                                    ) : !isStripeLoaded ? (
                                        "Loading..."
                                    ) : (
                                        "Confirmar e Pagar"
                                    )}
                                </button>
                            </form>

                            {/* Security Notice */}
                            <div className="mt-6 flex items-center text-sm text-gray-500">
                                <Shield className="h-4 w-4 mr-2" />
                                Your payment information is encrypted and secure
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
                            <div className="flex items-center mb-6">
                                <Package className="h-6 w-6 text-purple-600 mr-3" />
                                <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Service Details */}
                                <div>
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                                            <Package className="h-6 w-6 text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 mb-1">Services</h3>
                                            <p className="text-gray-700 font-medium">{service.name}</p>
                                            <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Freelancer */}
                                <div className="flex items-center">
                                    <Package className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Freelancer</p>
                                        <p className="font-medium text-gray-900">{service.freelancer}</p>
                                    </div>
                                </div>

                                {/* Delivery Time */}
                                <div className="flex items-center">
                                    <Clock className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Delivery Time</p>
                                        <p className="font-medium text-gray-900">{service.deliveryTime}</p>
                                    </div>
                                </div>

                                {/* Pricing Breakdown */}
                                <div className="border-t border-gray-200 pt-6 space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Service Price</span>
                                        <span className="font-medium text-gray-900">${service.price.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Service Fee</span>
                                        <span className="font-medium text-gray-900">${service.serviceFee.toFixed(2)}</span>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-semibold text-gray-900">Total</span>
                                            <span className="text-2xl font-bold text-purple-600">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Money Back Guarantee */}
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                    <div className="flex items-center">
                                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                                        <div>
                                            <p className="text-sm font-medium text-green-800">Money Back Guarantee</p>
                                            <p className="text-xs text-green-600 mt-1">
                                                Get a full refund if you're not satisfied with the work
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                </main>
            </div>
        </div>
    );
};

export default Payment;
