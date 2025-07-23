import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";
import { CreditCard, Shield, Clock, Package } from "lucide-react";

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
    notifications?: number;
    messages?: number;
}

const Dashboard = () => {
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

    const [cardData, setCardData] = useState({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setCardData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(" ");
        } else {
            return v;
        }
    };

    const formatExpiryDate = (value: string) => {
        const v = value.replace(/\D/g, "");
        if (v.length >= 2) {
            return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
        }
        return v;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Use Inertia.js router to submit the payment
        router.post(
            "/payment/process",
            {
                service_id: service.id,
                card_number: cardData.cardNumber,
                card_name: cardData.cardName,
                expiry_date: cardData.expiryDate,
                cvv: cardData.cvv,
            },
            {
                onSuccess: () => {
                    setIsProcessing(false);
                    // You can handle success here, maybe redirect to success page
                },
                onError: (errors) => {
                    setIsProcessing(false);
                    console.error("Payment failed:", errors);
                },
            }
        );
    };

    const handleLogout = () => {
        router.post(
            "/logout",
            {},
            {
                onSuccess: () => {
                    window.location.href = "/";
                },
            },
        );
    };

    const total = service.price + service.serviceFee;

    return (
        <div className="flex ">
            {/* <Sidebar /> */}
            {/* Content wrapper with left margin equal to sidebar width */}
            <div className="flex-1">
                <Header />
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

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Card Number */}
                                    <div>
                                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                            Card Number
                                        </label>
                                        <input
                                            id="cardNumber"
                                            type="text"
                                            placeholder="Enter Card Number"
                                            value={cardData.cardNumber}
                                            onChange={(e) => handleInputChange("cardNumber", formatCardNumber(e.target.value))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                            maxLength={19}
                                            required
                                        />
                                    </div>

                                    {/* Card Name */}
                                    <div>
                                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Card Name
                                        </label>
                                        <input
                                            id="cardName"
                                            type="text"
                                            placeholder="Enter Card Name"
                                            value={cardData.cardName}
                                            onChange={(e) => handleInputChange("cardName", e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                            required
                                        />
                                    </div>

                                    {/* Expiry Date and CVV */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                                                Expiry Date
                                            </label>
                                            <input
                                                id="expiryDate"
                                                type="text"
                                                placeholder="MM/YY"
                                                value={cardData.expiryDate}
                                                onChange={(e) => handleInputChange("expiryDate", formatExpiryDate(e.target.value))}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                                maxLength={5}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                                                CVV
                                            </label>
                                            <input
                                                id="cvv"
                                                type="text"
                                                placeholder="123"
                                                value={cardData.cvv}
                                                onChange={(e) => handleInputChange("cvv", e.target.value.replace(/\D/g, ""))}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                                maxLength={4}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center"
                                    >
                                        {isProcessing ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Processing...
                                            </>
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

                        {/* Additional Information */}
                        {/* <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Your freelancer will be notified immediately after payment</li>
                                <li>• You'll receive regular updates on your project progress</li>
                                <li>• All communication happens through our secure platform</li>
                                <li>• Payment is held securely until you approve the final work</li>
                            </ul>
                        </div> */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
