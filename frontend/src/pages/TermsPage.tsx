import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="pt-20 pb-16">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                        <p className="text-gray-600">Last updated: October 29, 2025</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
                    >
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                            <p className="text-gray-600">
                                By accessing and using LuxeStay, you accept and agree to be bound by these Terms of Service. 
                                If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Booking and Reservations</h2>
                            <p className="text-gray-600 mb-2">When making a booking through our platform:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>You must provide accurate and complete information</li>
                                <li>You are responsible for all charges incurred</li>
                                <li>Bookings are subject to availability and confirmation</li>
                                <li>Prices are subject to change until booking is confirmed</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Cancellation and Refunds</h2>
                            <p className="text-gray-600">
                                Cancellation policies vary by property. Please review the specific cancellation policy 
                                for your booking before confirming. Refunds are processed according to the property's policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. User Conduct</h2>
                            <p className="text-gray-600 mb-2">You agree not to:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                <li>Use the service for any illegal purpose</li>
                                <li>Provide false or misleading information</li>
                                <li>Interfere with the proper functioning of the platform</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Payment Terms</h2>
                            <p className="text-gray-600">
                                All payments are processed securely through our payment partners. You authorize us to 
                                charge your payment method for all fees incurred. Prices are displayed in USD unless 
                                otherwise specified.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
                            <p className="text-gray-600">
                                LuxeStay acts as an intermediary between you and accommodation providers. We are not 
                                responsible for the quality, safety, or legality of properties listed on our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Intellectual Property</h2>
                            <p className="text-gray-600">
                                All content on this platform, including text, graphics, logos, and software, is the 
                                property of LuxeStay and protected by copyright laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Changes to Terms</h2>
                            <p className="text-gray-600">
                                We reserve the right to modify these terms at any time. Continued use of the service 
                                after changes constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Contact Information</h2>
                            <p className="text-gray-600">
                                For questions about these Terms of Service, contact us at legal@luxestay.com
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TermsPage;
