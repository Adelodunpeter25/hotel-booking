import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dynamically import all images from assets folder
const images = Object.values(
    import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
) as string[];

const LandingPage = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const [currentImage, setCurrentImage] = useState(0);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ checkIn, checkOut, guests });
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
                            className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out ${index === currentImage ? 'scale-125' : 'scale-100'
                                }`}
                        />
                    </div>
                ))}

                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center mb-4 sm:mb-6">
                        Find Your Perfect Stay
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center mb-8 sm:mb-12 max-w-2xl px-4">
                        Discover amazing hotels worldwide with the best rates and instant confirmation
                    </p>

                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 w-full max-w-4xl mx-4">
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

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Guests
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={guests}
                                    onChange={(e) => setGuests(parseInt(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    required
                                />
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
                    </form>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-12 sm:py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-16">
                        Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                        <div className="text-center">
                            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Best Prices</h3>
                            <p className="text-gray-600">
                                Get the best deals and exclusive discounts on hotels worldwide
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secure Booking</h3>
                            <p className="text-gray-600">
                                Your information is safe with our secure payment system
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instant Confirmation</h3>
                            <p className="text-gray-600">
                                Receive immediate booking confirmation via email
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LandingPage;
