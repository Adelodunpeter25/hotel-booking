import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="pt-20 pb-16">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About LuxeStay</h1>
                        <p className="text-lg text-gray-600">Your trusted partner in finding perfect accommodations</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Founded in 2024, LuxeStay has been revolutionizing the way travelers find and book their perfect accommodations. 
                            We believe that every journey deserves a memorable stay, and we're committed to making that happen.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            With thousands of properties worldwide, from luxury resorts to cozy boutique hotels, we offer something for every 
                            traveler and every budget. Our platform combines cutting-edge technology with personalized service to ensure 
                            you find exactly what you're looking for.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid md:grid-cols-3 gap-6 mb-8"
                    >
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏨</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">10,000+</h3>
                            <p className="text-gray-600">Hotels Worldwide</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">👥</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">1M+</h3>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">4.8/5</h3>
                            <p className="text-gray-600">Average Rating</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">🎯 Customer First</h3>
                                <p className="text-gray-600">Your satisfaction is our top priority. We go above and beyond to ensure your booking experience is seamless.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">💎 Quality Assurance</h3>
                                <p className="text-gray-600">Every property on our platform is carefully vetted to meet our high standards of quality and service.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">🔒 Trust & Security</h3>
                                <p className="text-gray-600">Your data and payments are protected with industry-leading security measures.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">🌍 Global Reach</h3>
                                <p className="text-gray-600">From bustling cities to remote paradises, we connect you with accommodations worldwide.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
