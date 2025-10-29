import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import AdminSidebar from '../../components/admin/AdminSidebar';
import MetricCard from '../../components/admin/MetricCard';
import MonthlyChart from '../../components/admin/MonthlyChart';
import BookingsTab from '../../components/admin/BookingsTab';
import HotelsTab from '../../components/admin/HotelsTab';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const metrics = [
        {
            label: 'Total Earn',
            value: '$65,923.20',
            status: 'success' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            label: 'Pending Payment',
            value: '$3,167,801.70',
            status: 'warning' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            label: 'Incompleted Payment',
            value: '$0.00',
            status: 'info' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            label: 'Canceled Payment',
            value: '$840.00',
            status: 'danger' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ),
        },
        {
            label: 'Total Booking Completed',
            value: '15',
            status: 'success' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            label: 'Total Running Booking',
            value: '10',
            status: 'warning' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            label: 'Total Booking Request',
            value: '1,018',
            status: 'info' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            label: 'Total Booking Canceled',
            value: '1',
            status: 'danger' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            label: "Today's Booked Room",
            value: '0',
            status: 'info' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            label: "Today's Available Room",
            value: '138',
            status: 'success' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ),
        },
        {
            label: 'Total Booked Room',
            value: '12',
            status: 'info' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
        {
            label: 'Total Room',
            value: '150',
            status: 'info' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            label: 'Total Room Type',
            value: '18',
            status: 'info' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
            ),
        },
        {
            label: 'Total User',
            value: '2',
            status: 'info' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            label: 'Active Customer',
            value: '315',
            status: 'success' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            label: 'Inactive Customer',
            value: '0',
            status: 'danger' as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
        },
    ];

    const recentBookings = [
        { id: 1, guest: 'John Doe', room: 'Super Deluxe Twin', date: '2025-11-05', amount: '$299', status: 'Confirmed' },
        { id: 2, guest: 'Jane Smith', room: 'Luxury Suite', date: '2025-11-08', amount: '$450', status: 'Pending' },
        { id: 3, guest: 'Mike Johnson', room: 'Superior Premium Room', date: '2025-11-10', amount: '$45', status: 'Confirmed' },
        { id: 4, guest: 'Sarah Williams', room: 'Balcony Executive Room', date: '2025-11-12', amount: '$550', status: 'Confirmed' },
        { id: 5, guest: 'Tom Brown', room: 'Deluxe Single Room', date: '2025-11-15', amount: '$189', status: 'Canceled' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="flex pt-14 min-h-screen">
                <AdminSidebar 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <div className="flex-1 w-full lg:ml-64">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden fixed bottom-6 right-6 z-30 bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="p-6">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {metrics.map((metric, index) => (
                                <MetricCard
                                    key={index}
                                    label={metric.label}
                                    value={metric.value}
                                    icon={metric.icon}
                                    status={metric.status}
                                />
                            ))}
                        </div>

                        {/* Recent Bookings and Monthly Report */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Recent Booking Request - Left Side */}
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Booking Request</h2>
                                <div className="space-y-3 max-h-96 overflow-y-auto">
                                    {[
                                        { id: '#UYB033312UAI', room: 'Super Deluxe Twin', amount: '$1,260.00' },
                                        { id: '#KDV075959L0D', room: 'Luxury Suite', amount: '$478.80' },
                                        { id: '#W0E045159B2T', room: 'Superior Premium Room', amount: '$1,470.00' },
                                        { id: '#CQ9074830QAR', room: 'Balcony Executive Room', amount: '$210.00' },
                                        { id: '#9760417094XE', room: 'Superior Premium Room', amount: '$1,470.00' },
                                        { id: '#I8G080446IF2', room: 'Twin Premium Room', amount: '$840.00' },
                                        { id: '#UIL071440GNQ', room: 'Deluxe Single Room', amount: '$210.00' },
                                        { id: '#M1U090614JM0', room: 'Balcony Executive Room', amount: '$420.00' },
                                        { id: '#W6Y090011GKY', room: 'Balcony Executive Room', amount: '$1,470.00' },
                                        { id: '#SOD070801Y3R', room: 'Deluxe Single Room', amount: '$1,050.00' },
                                    ].map((booking) => (
                                        <div key={booking.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-gray-900">{booking.id}</p>
                                                <p className="text-xs text-gray-500">{booking.room}</p>
                                            </div>
                                            <p className="text-sm font-bold text-gray-900">{booking.amount}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Monthly Earning Report - Right Side */}
                            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Monthly Earning Report (Last 12 Months)</h2>
                                <MonthlyChart />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Bookings Tab */}
                {activeTab === 'bookings' && <BookingsTab />}

                {/* Hotels Tab */}
                {activeTab === 'hotels' && <HotelsTab />}

                {/* Users Tab */}
                {activeTab === 'users' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-md p-6"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Users Management</h2>
                        <p className="text-gray-500">Users management coming soon...</p>
                        </motion.div>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
