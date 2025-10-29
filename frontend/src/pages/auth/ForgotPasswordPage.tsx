import { useState } from 'react';
import { motion } from 'framer-motion';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Reset email sent to:', email);
        setSubmitted(true);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen flex"
        >
            {/* Left Side - Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 relative"
            >
                <a href="/" className="absolute top-8 left-8 inline-flex items-center space-x-2 text-gray-700 hover:text-yellow-600 font-medium transition duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Back to Home</span>
                </a>

                <div className="w-full max-w-md">
                    <a href="/" className="inline-block mb-8">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                            LuxeStay
                        </h1>
                    </a>

                    {!submitted ? (
                        <>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
                            <p className="text-gray-600 mb-8">
                                Enter your email address and we'll send you a link to reset your password
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition duration-200"
                                >
                                    Send Reset Link
                                </button>
                            </form>

                            <p className="mt-6 text-center text-gray-600">
                                Remember your password?{' '}
                                <a href="/login" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                                    Sign in
                                </a>
                            </p>
                        </>
                    ) : (
                        <div className="text-center">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Check your email</h3>
                                <p className="text-gray-600">
                                    We've sent a password reset link to <strong>{email}</strong>
                                </p>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Didn't receive the email? Check your spam folder or{' '}
                                <button onClick={() => setSubmitted(false)} className="text-yellow-600 hover:text-yellow-700 font-semibold">
                                    try again
                                </button>
                            </p>
                            <a href="/login" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                                Back to Sign In
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:block lg:w-1/2 relative overflow-hidden"
            >
                <img
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200"
                    alt="Luxury Hotel"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-black/50"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                    <h3 className="text-4xl font-bold mb-4">Reset Your Password</h3>
                    <p className="text-lg text-white/90">
                        We'll help you get back to booking your perfect stays in no time
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ForgotPasswordPage;
