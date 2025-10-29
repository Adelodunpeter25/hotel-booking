import { motion, AnimatePresence } from 'framer-motion';

interface Booking {
    id: string;
    guest: string;
    room: string;
    checkin: string;
    checkout: string;
    amount: string;
    status: string;
}

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    booking: Booking | null;
    onEdit: () => void;
}

const BookingModal = ({ isOpen, onClose, booking, onEdit }: BookingModalProps) => {
    if (!booking) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col max-h-[90vh]">
                            <div className="p-6 border-b flex items-center justify-between flex-shrink-0">
                                <h2 className="text-2xl font-bold text-gray-900">Booking Details</h2>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-600 transition"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Booking ID</p>
                                        <p className="font-semibold text-gray-900">{booking.id}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Status</p>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                            booking.status === 'Confirmed'
                                                ? 'bg-green-50 text-green-600'
                                                : booking.status === 'Pending'
                                                ? 'bg-orange-50 text-orange-600'
                                                : 'bg-red-50 text-red-600'
                                        }`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Guest Name</p>
                                    <p className="font-semibold text-gray-900">{booking.guest}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Room Type</p>
                                    <p className="font-semibold text-gray-900">{booking.room}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Check-in</p>
                                        <p className="font-semibold text-gray-900">{booking.checkin}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Check-out</p>
                                        <p className="font-semibold text-gray-900">{booking.checkout}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                                    <p className="text-2xl font-bold text-gray-900">{booking.amount}</p>
                                </div>
                            </div>

                            <div className="p-6 border-t flex justify-end space-x-3">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                                >
                                    Close
                                </button>
                                <button 
                                    onClick={onEdit}
                                    className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
                                >
                                    Edit Booking
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
