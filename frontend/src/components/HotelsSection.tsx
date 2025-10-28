import { useState } from 'react';
import { motion } from 'framer-motion';

interface Hotel {
    id: number;
    name: string;
    location: string;
    type: string;
    price: number;
    rating: number;
    image: string;
    amenities: string[];
}

const HotelsSection = () => {
    const [selectedType, setSelectedType] = useState('All');

    const hotelTypes = ['All', 'Luxury', 'Business', 'Resort', 'Boutique', 'Budget'];

    const hotels: Hotel[] = [
        {
            id: 1,
            name: 'Grand Plaza Hotel',
            location: 'New York, USA',
            type: 'Luxury',
            price: 299,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant']
        },
        {
            id: 2,
            name: 'Skyline Business Center',
            location: 'London, UK',
            type: 'Business',
            price: 189,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
            amenities: ['WiFi', 'Conference Room', 'Gym']
        },
        {
            id: 3,
            name: 'Paradise Beach Resort',
            location: 'Maldives',
            type: 'Resort',
            price: 450,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
            amenities: ['Beach', 'Pool', 'Spa', 'Restaurant', 'Bar']
        },
        {
            id: 4,
            name: 'The Artisan Boutique',
            location: 'Paris, France',
            type: 'Boutique',
            price: 220,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
            amenities: ['WiFi', 'Restaurant', 'Art Gallery']
        },
        {
            id: 5,
            name: 'City Stay Inn',
            location: 'Bangkok, Thailand',
            type: 'Budget',
            price: 45,
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
            amenities: ['WiFi', 'Breakfast']
        },
        {
            id: 6,
            name: 'Royal Palace Hotel',
            location: 'Dubai, UAE',
            type: 'Luxury',
            price: 550,
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
            amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Concierge']
        }
    ];

    const filteredHotels = selectedType === 'All'
        ? hotels
        : hotels.filter(hotel => hotel.type === selectedType);

    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Explore Our Hotels
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the perfect accommodation for your next adventure
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {hotelTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedType === type
                                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[200px]">
                    {filteredHotels.length > 0 && (
                        <>
                            {/* Large Card - Left Column (Spans 2 rows) */}
                            <motion.div
                                key={filteredHotels[0].id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="md:col-span-6 md:row-span-2 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Background Image */}
                                <img
                                    src={filteredHotels[0].image}
                                    alt={filteredHotels[0].name}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    {/* Top Badges */}
                                    <div className="flex justify-between items-start">
                                        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                            <span className="text-sm font-bold text-white">{filteredHotels[0].amenities.length} room(s)</span>
                                        </div>
                                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-sm font-semibold text-gray-900">{filteredHotels[0].rating}</span>
                                        </div>
                                    </div>

                                    {/* Bottom Info */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                                            {filteredHotels[0].name}
                                        </h3>
                                        <p className="text-white/90 text-lg mb-4">{filteredHotels[0].type}</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-2xl font-bold text-white">
                                                ${filteredHotels[0].price}
                                                <span className="text-sm font-normal text-white/80">/night</span>
                                            </p>
                                            <button className="bg-white hover:bg-yellow-500 text-black font-semibold px-6 py-2.5 rounded-lg transition duration-200">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Medium Card - Top Right */}
                            {filteredHotels.length > 1 && (
                                <motion.div
                                    key={filteredHotels[1].id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="md:col-span-3 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Hotel Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={filteredHotels[1].image}
                                            alt={filteredHotels[1].name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-sm font-semibold text-gray-900">{filteredHotels[1].rating}</span>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <span className="text-xs font-semibold text-white">{filteredHotels[1].type}</span>
                                        </div>
                                    </div>

                                    {/* Hotel Info */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                                            {filteredHotels[1].name}
                                        </h3>
                                        <p className="text-gray-600 mb-3 flex items-center text-sm">
                                            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {filteredHotels[1].location}
                                        </p>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {filteredHotels[1].amenities.slice(0, 3).map((amenity) => (
                                                <span
                                                    key={amenity}
                                                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                                                >
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Price and Button */}
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                            <div>
                                                <p className="text-xs text-gray-500">Starting from</p>
                                                <p className="text-xl font-bold text-gray-900">
                                                    ${filteredHotels[1].price}
                                                    <span className="text-sm font-normal text-gray-500">/night</span>
                                                </p>
                                            </div>
                                            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-6 py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Small Card - Bottom Middle */}
                            {filteredHotels.length > 2 && (
                                <motion.div
                                    key={filteredHotels[2].id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="md:col-span-3 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={filteredHotels[2].image}
                                        alt={filteredHotels[2].name}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                                        <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 self-start">
                                            <span className="text-xs font-semibold text-white">{filteredHotels[2].amenities.length} room(s)</span>
                                        </div>

                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                                                {filteredHotels[2].name}
                                            </h3>
                                            <p className="text-white/90 text-sm mb-2">{filteredHotels[2].type}</p>
                                            <p className="text-lg font-bold text-white">
                                                ${filteredHotels[2].price}
                                                <span className="text-xs font-normal text-white/80">/night</span>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </>
                    )}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button className="bg-gray-900 hover:bg-black text-white font-semibold px-8 py-3.5 rounded-lg transition duration-200 shadow-lg hover:shadow-xl">
                        View All Hotels
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HotelsSection;
