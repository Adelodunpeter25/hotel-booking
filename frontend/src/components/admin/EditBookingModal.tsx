import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Booking {
    id: string;
    guest: string;
    hotel: string;
    room: string;
    checkin: string;
    checkout: string;
    amount: string;
    status: string;
}

interface EditBookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    booking: Booking | null;
}

const EditBookingModal = ({ isOpen, onClose, booking }: EditBookingModalProps) => {
    const [status, setStatus] = useState(booking?.status || 'Confirmed');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Updated booking status:', status);
        alert('Booking status updated successfully!');
        onClose();
    };

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
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-900">Update Booking Status</h2>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-600 transition"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    >
                                        <option>Confirmed</option>
                                        <option>Pending</option>
                                        <option>Canceled</option>
                                    </select>
                                </div>

                                <div className="pt-4 flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
                                    >
                                        Update Status
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EditBookingModal;
