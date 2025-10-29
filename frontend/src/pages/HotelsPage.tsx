import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Hotel } from '../types/hotel';

const HotelsPage = () => {
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState('All');
    const [priceRange, setPriceRange] = useState('All');

    const hotelTypes = ['All', 'Luxury', 'Business', 'Resort', 'Boutique', 'Budget'];
    const priceRanges = ['All', 'Under $100', '$100-$300', 'Over $300'];

    const hotels: Hotel[] = [
        { id: 1, name: 'Grand Plaza Hotel', location: 'New York, USA', type: 'Luxury', price: 299, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
        { id: 2, name: 'Skyline Business Center', location: 'London, UK', type: 'Business', price: 189, rating: 4.6, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', amenities: ['WiFi', 'Conference Room', 'Gym'] },
        { id: 3, name: 'Paradise Beach Resort', location: 'Maldives', type: 'Resort', price: 450, rating: 4.9, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800', amenities: ['Beach', 'Pool', 'Spa', 'Restaurant', 'Bar'] },
        { id: 4, name: 'The Artisan Boutique', location: 'Paris, France', type: 'Boutique', price: 220, rating: 4.7, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800', amenities: ['WiFi', 'Restaurant', 'Art Gallery'] },
        { id: 5, name: 'City Stay Inn', location: 'Bangkok, Thailand', type: 'Budget', price: 45, rating: 4.2, image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800', amenities: ['WiFi', 'Breakfast'] },
        { id: 6, name: 'Royal Palace Hotel', location: 'Dubai, UAE', type: 'Luxury', price: 550, rating: 5.0, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Concierge'] },
    ];

    const filteredHotels = hotels.filter(hotel => {
        const typeMatch = selectedType === 'All' || hotel.type === selectedType;
        const priceMatch = priceRange === 'All' || 
            (priceRange === 'Under $100' && hotel.price < 100) ||
            (priceRange === '$100-$300' && hotel.price >= 100 && hotel.price <= 300) ||
            (priceRange === 'Over $300' && hotel.price > 300);
        return typeMatch && priceMatch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Hotels</h1>
                        <p className="text-lg text-gray-600">Discover your perfect accommodation</p>
                    </motion.div>

                    {/* Filters */}
                    <div className="mb-8 space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Hotel Type</h3>
                            <div className="flex flex-wrap gap-2">
                                {hotelTypes.map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedType(type)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all ${
                                            selectedType === type
                                                ? 'bg-yellow-400 text-black'
                                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
                            <div className="flex flex-wrap gap-2">
                                {priceRanges.map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => setPriceRange(range)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all ${
                                            priceRange === range
                                                ? 'bg-yellow-400 text-black'
                                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hotels Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredHotels.map((hotel, index) => (
                            <motion.div
                                key={hotel.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => navigate(`/hotel/${hotel.id}`)}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full flex items-center space-x-1">
                                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{hotel.location}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                            {hotel.type}
                                        </span>
                                        <p className="text-2xl font-bold text-gray-900">
                                            ${hotel.price}
                                            <span className="text-sm font-normal text-gray-500">/night</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredHotels.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No hotels found matching your criteria</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HotelsPage;
