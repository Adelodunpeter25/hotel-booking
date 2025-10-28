import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            
            <div className="flex-1 flex items-center justify-center px-4 pt-20">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* 404 Number */}
                        <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                            404
                        </h1>
                        
                        {/* Message */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/')}
                                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                            >
                                Back to Home
                            </button>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-gray-900 hover:bg-black text-white font-semibold px-8 py-3 rounded-lg transition duration-200"
                            >
                                Go Back
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NotFoundPage;
