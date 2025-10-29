import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HotelsSection from '../components/HotelsSection';

// Dynamically import all images from assets folder
const images = Object.values(
    import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
) as string[];

const LandingPage = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const [showGuestDropdown, setShowGuestDropdown] = useState(false);

    // Guest details
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ checkIn, checkOut, adults, children, rooms });
    };

    const getGuestSummary = () => {
        const parts = [];
        if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? 's' : ''}`);
        if (children > 0) parts.push(`${children} Child${children > 1 ? 'ren' : ''}`);
        parts.push(`${rooms} Room${rooms > 1 ? 's' : ''}`);
        return parts.join(', ');
    };

    // Auto-rotate images with smooth transition
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            {/* Hero Section */}
            <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
                {/* Background Images */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Hotel ${index + 1}`}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-linear ${index === currentImage ? 'scale-125' : 'scale-100'
                                }`}
                        />
                    </div>
                ))}

                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center mb-4 sm:mb-6"
                    >
                        Find Your Perfect Stay
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center max-w-2xl px-4"
                    >
                        Discover amazing hotels worldwide with the best rates and instant confirmation
                    </motion.p>
                </div>
            </div>

            {/* Search Form Section */}
            <div className="relative -mt-16 sm:-mt-20 md:-mt-24 z-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.form
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        onSubmit={handleSearch}
                        className="bg-white rounded-lg shadow-2xl p-4 sm:p-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Check-in
                                </label>
                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Guests & Rooms
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-left bg-white flex justify-between items-center"
                                >
                                    <span className="text-gray-700">{getGuestSummary()}</span>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {showGuestDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: 'easeOut' }}
                                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-30 p-4"
                                        >
                                            {/* Adults */}
                                            <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                <div>
                                                    <p className="font-medium text-gray-700">Adults</p>
                                                    <p className="text-sm text-gray-500">Ages 13+</p>
                                                </div>
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

                                            {/* Children */}
                                            <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                <div>
                                                    <p className="font-medium text-gray-700">Children</p>
                                                    <p className="text-sm text-gray-500">Ages 0-12</p>
                                                </div>
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

                                            {/* Rooms */}
                                            <div className="flex items-center justify-between py-3">
                                                <div>
                                                    <p className="font-medium text-gray-700">Rooms</p>
                                                </div>
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

                                            {/* Done Button */}
                                            <button
                                                type="button"
                                                onClick={() => setShowGuestDropdown(false)}
                                                className="w-full mt-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold py-2 rounded-lg transition duration-200"
                                            >
                                                Done
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="sm:col-span-2 md:col-span-1 flex items-end">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-lg transition duration-200"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </motion.form>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-12 sm:py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-16">
                        Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                                    Best Prices
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Get the best deals and exclusive discounts on hotels worldwide with our price match guarantee
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-gray-800 to-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                                    Secure Booking
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Your information is safe with our secure payment system and encrypted data protection
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden sm:col-span-2 lg:col-span-1"
                        >
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                                    Instant Confirmation
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Receive immediate booking confirmation via email and SMS with all your reservation details
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Hotels Section */}
            <HotelsSection />

            <Footer />
        </div>
    );
};

export default LandingPage;
