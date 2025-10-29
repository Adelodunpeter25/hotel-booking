import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="pt-20 pb-16">
                <div className="max-w-4xl mx-auto px-4">
                    <a href="/" className="inline-flex items-center space-x-2 text-gray-700 hover:text-yellow-600 font-medium mb-6 transition duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Back to Home</span>
                    </a>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-600">Last updated: October 29, 2025</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
                    >
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
                            <p className="text-gray-600 mb-2">We collect information you provide directly to us, including:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Name, email address, and contact information</li>
                                <li>Payment and billing information</li>
                                <li>Booking preferences and history</li>
                                <li>Communication preferences</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
                            <p className="text-gray-600 mb-2">We use the information we collect to:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Process your bookings and payments</li>
                                <li>Send booking confirmations and updates</li>
                                <li>Provide customer support</li>
                                <li>Improve our services and user experience</li>
                                <li>Send promotional communications (with your consent)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Information Sharing</h2>
                            <p className="text-gray-600">
                                We do not sell your personal information. We may share your information with hotel partners 
                                to complete your bookings, and with service providers who assist us in operating our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data Security</h2>
                            <p className="text-gray-600">
                                We implement industry-standard security measures to protect your personal information. 
                                All payment information is encrypted and processed through secure payment gateways.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
                            <p className="text-gray-600 mb-2">You have the right to:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Cookies</h2>
                            <p className="text-gray-600">
                                We use cookies and similar technologies to enhance your experience, analyze usage, 
                                and personalize content. You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
                            <p className="text-gray-600">
                                If you have questions about this Privacy Policy, please contact us at privacy@luxestay.com
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPage;
