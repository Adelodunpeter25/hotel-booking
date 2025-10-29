import { useState } from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';
import EditBookingModal from './EditBookingModal';

interface Booking {
    id: string;
    guest: string;
    room: string;
    checkin: string;
    checkout: string;
    amount: string;
    status: string;
}

const BookingsTab = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const allBookings = [
        { id: '#UYB033312UAI', guest: 'John Doe', room: 'Super Deluxe Twin', checkin: '2025-11-05', checkout: '2025-11-08', amount: '$1,260.00', status: 'Confirmed' },
        { id: '#KDV075959L0D', guest: 'Jane Smith', room: 'Luxury Suite', checkin: '2025-11-10', checkout: '2025-11-12', amount: '$478.80', status: 'Pending' },
        { id: '#W0E045159B2T', guest: 'Mike Johnson', room: 'Superior Premium Room', checkin: '2025-11-15', checkout: '2025-11-18', amount: '$1,470.00', status: 'Confirmed' },
        { id: '#CQ9074830QAR', guest: 'Sarah Williams', room: 'Balcony Executive Room', checkin: '2025-11-20', checkout: '2025-11-22', amount: '$210.00', status: 'Canceled' },
        { id: '#9760417094XE', guest: 'Tom Brown', room: 'Superior Premium Room', checkin: '2025-11-25', checkout: '2025-11-27', amount: '$1,470.00', status: 'Confirmed' },
    ];

    const filteredBookings = allBookings.filter(booking => {
        const matchesSearch = booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            booking.room.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All Status' || booking.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleView = (booking: Booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const handleEdit = () => {
        setIsModalOpen(false);
        setIsEditModalOpen(true);
    };

    return (
        <>
            <BookingModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                booking={selectedBooking}
                onEdit={handleEdit}
            />
            
            <EditBookingModal 
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                booking={selectedBooking}
            />
            
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-md p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">All Bookings</h2>
                <div className="flex items-center space-x-3">
                    <input
                        type="text"
                        placeholder="Search bookings..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                    <select 
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                        <option>All Status</option>
                        <option>Confirmed</option>
                        <option>Pending</option>
                        <option>Canceled</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Booking ID</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Guest</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Room Type</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Check-in</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Check-out</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Amount</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Status</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map((booking) => (
                            <tr 
                                key={booking.id} 
                                onClick={() => handleView(booking)}
                                className="border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer"
                            >
                                <td className="py-4 px-4 font-semibold text-gray-900 text-sm">{booking.id}</td>
                                <td className="py-4 px-4 text-gray-900">{booking.guest}</td>
                                <td className="py-4 px-4 text-gray-600">{booking.room}</td>
                                <td className="py-4 px-4 text-gray-600">{booking.checkin}</td>
                                <td className="py-4 px-4 text-gray-600">{booking.checkout}</td>
                                <td className="py-4 px-4 font-semibold text-gray-900">{booking.amount}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        booking.status === 'Confirmed'
                                            ? 'bg-green-50 text-green-600'
                                            : booking.status === 'Pending'
                                            ? 'bg-orange-50 text-orange-600'
                                            : 'bg-red-50 text-red-600'
                                    }`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedBooking(booking);
                                            setIsEditModalOpen(true);
                                        }}
                                        className="text-yellow-600 hover:text-yellow-700 font-medium text-sm"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredBookings.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No bookings found matching your criteria
                    </div>
                )}
            </div>
        </motion.div>
        </>
    );
};

export default BookingsTab;
