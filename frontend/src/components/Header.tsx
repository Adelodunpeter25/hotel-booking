import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-16 md:h-20 relative">
                    {/* Logo - Positioned on the left */}
                    <div className="absolute left-0">
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                            LuxeStay
                        </h1>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-yellow-600 transition duration-200 font-medium">
                            Home
                        </a>
                        <a href="#hotels" className="text-gray-700 hover:text-yellow-600 transition duration-200 font-medium">
                            Hotels
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-yellow-600 transition duration-200 font-medium">
                            About
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition duration-200 font-medium">
                            Contact
                        </a>
                    </div>

                    {/* Sign In Button - Positioned on the right */}
                    <div className="absolute right-0 hidden md:block">
                        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-6 py-2 rounded-lg transition duration-200">
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden absolute right-0 p-2 rounded-lg hover:bg-gray-100 transition duration-200"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#home"
                                className="text-gray-700 hover:text-yellow-600 transition duration-200 font-medium px-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="#hotels"
                                className="text-gray-700 hover:text-yellow-600 transition duration-200 font-medium px-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Hotels
                            </a>
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-yellow-600 transition duration-200 font-medium px-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-yellow-600 transition duration-200 font-medium px-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-6 py-2 rounded-lg transition duration-200 w-full">
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
