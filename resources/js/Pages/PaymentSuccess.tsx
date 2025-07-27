import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { CheckCircle, Package, Clock, User, ArrowRight, AlertTriangle } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";

// Define types for user, notification, and message props
interface UserData {
    id: number;
    name: string;
    email: string;
    // Add other user properties as needed
}

interface NotificationData {
    id: number;
    message: string;
    read: boolean;
    // Add other notification properties
}

interface MessageData {
    id: number;
    sender: string;
    content: string;
    // Add other message properties
}

interface PaymentData {
    service: {
        id: number;
        name: string;
        description: string;
        freelancer: string;
        deliveryTime: string;
        price: number;
        serviceFee: number;
    };
    payment: {
        id: string;
        amount: number;
        status: string;
        created_at: string;
    };
    user: {
        id: number;
        name: string;
        email: string;
    };
}

interface PageProps {
    paymentData?: PaymentData; // Make it optional
    notifications?: NotificationData[]; // Make it optional
    user?: UserData; // Make it optional
    messages?: MessageData[]; // Make it optional
}

const PaymentSuccess = () => {
    // Destructure all expected props from usePage
    const { paymentData, notifications, user, messages } = usePage<PageProps>().props;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleGoToDashboard = () => {
        router.visit('/dashboard');
    };

    const handleViewOrders = () => {
        router.visit('/orders');
    };

    // Handle case when essential paymentData is not available
    if (!paymentData || !paymentData.payment || !paymentData.service) {
        return (
            <div className="flex min-h-screen bg-gradient-to-br from-violet-50 to-gray-50">
                <Sidebar
                    isOpen={isSidebarOpen}
                    setIsOpen={setIsSidebarOpen}
                />
                <div className="flex-1 -ml-52">
                    <Header
                        user={user} // Pass user data
                        onMenuButtonClick={() => setIsSidebarOpen(true)}
                    />
                    <main className="flex-1 p-4 sm:p-6 lg:p-8" role="main">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                    <CheckCircle className="h-10 w-10 text-green-600" />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    Payment Successfull
                                </h1>
                                <p className="text-lg text-gray-600 mb-8">
                                    Your order has been confirmed and the freelancer will start working on it soon.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={handleViewOrders}
                                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                                    >
                                        View My Orders
                                    </button>
                                    <button
                                        onClick={handleGoToDashboard}
                                        className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-colors duration-200"
                                    >
                                        Back to Dashboard
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-violet-50 to-gray-50">
            <Sidebar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            {/* Content wrapper */}
            <div className="flex-1 -ml-52">
                <Header
                    user={user} // Pass user data
                    onMenuButtonClick={() => setIsSidebarOpen(true)}
                />

                <main className="flex-1 p-4 sm:p-6 lg:p-8" role="main">
                    <div className="max-w-4xl mx-auto">
                        {/* Success Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                <CheckCircle className="h-10 w-10 text-green-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Payment Successful!
                            </h1>
                            <p className="text-lg text-gray-600">
                                Your order has been confirmed and the freelancer will start working on it soon.
                            </p>
                        </div>

                        {/* Payment Details Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
                            <div className="border-b border-gray-200 pb-6 mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Payment ID</p>
                                        <p className="font-mono text-sm font-medium text-gray-900">
                                            {paymentData.payment.id}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Amount Paid</p>
                                        <p className="text-lg font-bold text-green-600">
                                            ${paymentData.payment.amount.toFixed(2)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Status</p>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            {paymentData.payment.status}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        <p className="font-medium text-gray-900">
                                            {new Date(paymentData.payment.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Service Details */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Package className="h-5 w-5 text-purple-600 mt-0.5 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-900">{paymentData.service.name}</p>
                                        <p className="text-sm text-gray-500 mt-1">{paymentData.service.description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <User className="h-5 w-5 text-purple-600 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Freelancer</p>
                                        <p className="font-medium text-gray-900">{paymentData.service.freelancer}</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Clock className="h-5 w-5 text-purple-600 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Expected Delivery</p>
                                        <p className="font-medium text-gray-900">{paymentData.service.deliveryTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What's Next Section */}
                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                                        1
                                    </div>
                                    <p className="text-gray-700">
                                        The freelancer will be notified about your order and will start working on it.
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                                        2
                                    </div>
                                    <p className="text-gray-700">
                                        You'll receive updates on the progress and can communicate directly with the freelancer.
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                                        3
                                    </div>
                                    <p className="text-gray-700">
                                        Once completed, you'll receive the final deliverables and can provide feedback.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleViewOrders}
                                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center"
                            >
                                View My Orders
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </button>
                            <button
                                onClick={handleGoToDashboard}
                                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-colors duration-200 flex items-center justify-center"
                            >
                                Back to Dashboard
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PaymentSuccess;
