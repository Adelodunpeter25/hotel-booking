import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HotelDetailsPage = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    // Sample hotel data
    const hotel = {
        id: 1,
        name: 'Grand Plaza Hotel',
        location: 'New York, USA',
        type: 'Luxury',
        price: 299,
        rating: 4.8,
        reviews: 1234,
        images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200',
        ],
        description: 'Experience luxury at its finest in the heart of New York City. Our Grand Plaza Hotel offers world-class amenities, stunning views, and exceptional service that will make your stay unforgettable.',
        amenities: [
            { icon: '🏊', name: 'Swimming Pool' },
            { icon: '🍽️', name: 'Restaurant' },
            { icon: '💆', name: 'Spa & Wellness' },
            { icon: '🏋️', name: 'Fitness Center' },
            { icon: '📶', name: 'Free WiFi' },
            { icon: '🅿️', name: 'Free Parking' },
            { icon: '🛎️', name: '24/7 Concierge' },
            { icon: '🧺', name: 'Laundry Service' },
        ],
        rooms: [
            { type: 'Standard Room', size: '25 m²', beds: '1 King Bed', guests: 2, price: 299 },
            { type: 'Deluxe Suite', size: '45 m²', beds: '1 King Bed + Sofa', guests: 3, price: 449 },
            { type: 'Executive Suite', size: '65 m²', beds: '2 King Beds', guests: 4, price: 599 },
        ],
    };

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ checkIn, checkOut, adults, children, rooms });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Image Gallery */}
            <div className="pt-14 md:pt-16">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    {/* Back to Home Button */}
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600 font-medium mb-4 transition duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Back to Home</span>
                    </button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[400px] md:h-[500px]">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="md:col-span-3 rounded-2xl overflow-hidden cursor-pointer group relative"
                        >
                            <img
                                src={hotel.images[selectedImage]}
                                alt={hotel.name}
                                loading="eager"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </motion.div>

                        {/* Thumbnail Images */}
                        <div className="hidden md:flex flex-col gap-2">
                            {hotel.images.slice(0, 4).map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedImage(index)}
                                    className={`flex-1 rounded-xl overflow-hidden cursor-pointer ${
                                        selectedImage === index ? 'ring-4 ring-yellow-500' : ''
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`View ${index + 1}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Hotel Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                        {hotel.name}
                                    </h1>
                                    <p className="text-gray-600 flex items-center text-lg">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {hotel.location}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-2xl font-bold text-gray-900">{hotel.rating}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{hotel.reviews} reviews</p>
                                </div>
                            </div>

                            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                                {hotel.type}
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Hotel</h2>
                            <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
                        </motion.div>

                        {/* Amenities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {hotel.amenities.map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
                                    >
                                        <span className="text-3xl mb-2">{amenity.icon}</span>
                                        <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Room Types */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Rooms</h2>
                            <div className="space-y-4">
                                {hotel.rooms.map((room, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-xl p-5 hover:border-yellow-500 transition-colors duration-200"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.type}</h3>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                        </svg>
                                                        {room.size}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                        </svg>
                                                        {room.beds}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        Up to {room.guests} guests
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-gray-900">
                                                    ${room.price}
                                                    <span className="text-sm font-normal text-gray-500">/night</span>
                                                </p>
                                            </div>
                                        </div>
                                        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition duration-200">
                                            Select Room
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl p-5 shadow-2xl mt-8 lg:mt-0"
                        >
                            <div className="mb-5">
                                <p className="text-sm text-gray-600 mb-1">Starting from</p>
                                <p className="text-3xl font-bold text-gray-900">
                                    ${hotel.price}
                                    <span className="text-base font-normal text-gray-500">/night</span>
                                </p>
                            </div>

                            <form onSubmit={handleBooking} className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Check-in
                                    </label>
                                    <input
                                        type="date"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Check-out
                                    </label>
                                    <input
                                        type="date"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Guests
                                    </label>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-700">Adults</span>
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setAdults(Math.max(1, adults - 1))}
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-600 transition"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center font-medium">{adults}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setAdults(adults + 1)}
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-600 transition"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-700">Children</span>
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setChildren(Math.max(0, children - 1))}
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-600 transition"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center font-medium">{children}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setChildren(children + 1)}
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-600 transition"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-700">Rooms</span>
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-600 transition"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center font-medium">{rooms}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setRooms(rooms + 1)}
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-600 transition"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Book Now
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HotelDetailsPage;
