// resources/js/Pages/Orders/Index.tsx
import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Order {
    id: string;
    clientName: string;
    orderDate: string;
    status: 'Active' | 'Pending' | 'In Progress' | 'Completed' | 'Canceled'; // Specific string literal types
}

// Define TypeScript interface for Props received from Laravel
interface OrdersIndexProps {
    orders: Order[];
    currentStatus: string;
}

const OrdersIndex: React.FC<OrdersIndexProps> = ({ orders, currentStatus }) => {
    const statuses = ['All', 'Active', 'Pending', 'In Progress', 'Completed', 'Canceled'];
    const getStatusClasses = (status: Order['status']) => {
        switch (status) {
            case 'Active':
                return 'bg-emerald-100 text-emerald-700';
            case 'Pending':
                return 'bg-amber-100 text-amber-700';
            case 'In Progress':
                return 'bg-blue-100 text-blue-700';
            case 'Completed':
                return 'bg-green-100 text-green-700';
            case 'Canceled':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-200 text-gray-700';
        }
    };

    return (
        <div className="p-5 font-sans bg-gray-50 min-h-screen box-border"> {/* Replaced padding, font, background */}
            <Head title="Orders" />
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"> {/* Replaced max-width, margin, background, border-radius, shadow */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-center"> {/* Replaced padding, border-bottom, display, justify, align */}
                    <h1 className="text-3xl font-bold text-gray-800 m-0">Orders</h1> {/* Replaced font-size, font-weight, color, margin */}
                    <div className="flex items-center gap-2"> {/* Replaced display, align, gap */}
                        {/* Three dots icon/menu - placeholder */}
                        <div className="w-6 h-6 flex flex-col justify-around items-center cursor-pointer"> {/* Replaced width, height, display, flex-direction, justify, align, cursor */}
                            <span className="block w-1 h-1 rounded-full bg-gray-500"></span> {/* Replaced display, width, height, border-radius, background */}
                            <span className="block w-1 h-1 rounded-full bg-gray-500"></span>
                            <span className="block w-1 h-1 rounded-full bg-gray-500"></span>
                        </div>
                    </div>
                </div>

                {/* Tab System */}
                <div className="flex gap-2 p-4 border-b border-gray-200 overflow-x-auto whitespace-nowrap"> {/* Replaced display, gap, padding, border-bottom, overflow, white-space */}
                    {statuses.map((status) => (
                        <Link
                            key={status}
                            href={status === 'All' ? '/orders' : `/orders?status=${status}`}
                            className={`
                                px-4 py-2 rounded-lg transition duration-200 ease-in-out
                                ${currentStatus === status || (currentStatus === 'All' && status === 'All')
                                    ? 'bg-purple-600 text-white font-semibold shadow-sm' // Active tab classes
                                    : 'bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100'} // Inactive tab classes with hover
                                flex-shrink-0 // Prevent tabs from shrinking
                            `}
                        >
                            {status}
                        </Link>
                    ))}
                </div>

                {/* Orders List/Table */}
                <div>
                    {/* Header Row */}
                    <div className="grid grid-cols-[0.8fr_2fr_1.2fr_1fr] bg-gray-100 text-gray-600 px-6 py-3 font-semibold text-sm uppercase tracking-wider border-b border-gray-200"> {/* Replaced display, grid-template-columns, background, color, padding, font-weight, font-size, text-transform, letter-spacing, border-bottom */}
                        <div>Order ID</div>
                        <div>Client Name</div>
                        <div>Order Date</div>
                        <div>Status</div>
                    </div>

                    {/* Data Rows */}
                    {orders.length > 0 ? (
                        orders.map((order) => {
                            const statusClasses = getStatusClasses(order.status);
                            return (
                                <div
                                    key={order.id + order.clientName + order.status}
                                    className="grid grid-cols-[0.8fr_2fr_1.2fr_1fr] px-6 py-3 items-center text-sm text-gray-700 border-1 border-gray-300 m-3 rounded-lg" // Replaced display, grid-template-columns, padding, border-bottom, align, font-size, color
                                >
                                    <div className="font-medium">{order.id}</div> {/* Replaced font-weight */}
                                    <div>{order.clientName}</div>
                                    <div>{order.orderDate}</div>
                                    <div>
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-block whitespace-nowrap ${statusClasses}`}> {/* Replaced padding, border-radius, font-size, font-weight, display, white-space */}
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="p-6 text-center text-gray-600">
                            No orders found for this status.
                        </div>
                    )}
                </div>

                <div className="p-4 text-right text-sm text-gray-600 border-t border-gray-200"> {/* Replaced padding, text-align, font-size, color, border-top */}
                    <a href="#" className="text-indigo-600 font-semibold hover:underline">View All</a> {/* Replaced text-decoration, color, font-weight */}
                </div>
            </div>
        </div>
    );
};

export default OrdersIndex;
