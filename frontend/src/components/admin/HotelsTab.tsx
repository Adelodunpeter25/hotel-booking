import { useState } from 'react';
import { motion } from 'framer-motion';

interface Room {
    id: string;
    name: string;
    type: string;
    capacity: number;
    price: string;
    status: string;
}

const HotelsTab = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');

    const allRooms = [
        { id: 'RM001', name: 'Room 101', type: 'Super Deluxe Twin', capacity: 2, price: '$420', status: 'Available' },
        { id: 'RM002', name: 'Room 102', type: 'Luxury Suite', capacity: 4, price: '$550', status: 'Occupied' },
        { id: 'RM003', name: 'Room 201', type: 'Superior Premium Room', capacity: 3, price: '$490', status: 'Available' },
        { id: 'RM004', name: 'Room 202', type: 'Balcony Executive Room', capacity: 2, price: '$210', status: 'Available' },
        { id: 'RM005', name: 'Room 301', type: 'Deluxe Single Room', capacity: 1, price: '$210', status: 'Maintenance' },
    ];

    const filteredRooms = allRooms.filter(room => {
        const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            room.type.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All Status' || room.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-md p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">All Rooms</h2>
                <div className="flex items-center space-x-3">
                    <input
                        type="text"
                        placeholder="Search rooms..."
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
                        <option>Available</option>
                        <option>Occupied</option>
                        <option>Maintenance</option>
                    </select>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition">
                        Add Room
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Room ID</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Room Name</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Room Type</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Capacity</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Price/Night</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Status</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRooms.map((room) => (
                            <tr 
                                key={room.id} 
                                className="border-b border-gray-100 hover:bg-gray-50 transition"
                            >
                                <td className="py-4 px-4 font-semibold text-gray-900 text-sm">{room.id}</td>
                                <td className="py-4 px-4 text-gray-900 font-medium">{room.name}</td>
                                <td className="py-4 px-4 text-gray-600">{room.type}</td>
                                <td className="py-4 px-4 text-gray-600">{room.capacity} guests</td>
                                <td className="py-4 px-4 font-semibold text-gray-900">{room.price}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        room.status === 'Available'
                                            ? 'bg-green-50 text-green-600'
                                            : room.status === 'Occupied'
                                            ? 'bg-orange-50 text-orange-600'
                                            : 'bg-red-50 text-red-600'
                                    }`}>
                                        {room.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <button className="text-yellow-600 hover:text-yellow-700 font-medium text-sm mr-3">
                                        Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredRooms.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No rooms found matching your criteria
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default HotelsTab;
