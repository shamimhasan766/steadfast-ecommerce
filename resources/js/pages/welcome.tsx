import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
                {/* Top navigation */}
                <nav className="container mx-auto max-w-6xl relative z-20 flex justify-end items-center p-6">
                    <div className="flex gap-4">
                        {auth.user ? (
                            <Link href={route('dashboard')} className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]">
                                <button className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    Dashboard
                                </button>
                            </Link>
                        ) : (
                            <>
                            <Link href={route('login')} className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]" >
                                <button className="px-6 py-2 text-white font-medium hover:text-purple-300 transition-colors duration-300">
                                    Log in
                                </button>
                            </Link>
                            <Link href={route('register')} className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]" >
                                <button className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    Register
                                </button>
                            </Link>
                            </>
                        )}
                    </div>
                </nav>
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    {/* Large circle decoration */}
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                    <div className="absolute top-40 right-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                    <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

                    {/* Floating geometric shapes */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white opacity-20 rotate-45"></div>
                    <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-300 opacity-30 rounded-full"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-pink-300 opacity-25 rotate-45"></div>
                    <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-300 opacity-40 rounded-full"></div>
                </div>

                {/* Main content */}
                <div className="relative z-10 flex items-center justify-center min-h-screen">
                    <div className="text-center">
                    {/* Main heading */}
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Ecommerce
                        </span>
                        <br />
                        <span className="text-white">App</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Your ultimate shopping destination with seamless experience and endless possibilities
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Get Started
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300">
                        Learn More
                        </button>
                    </div>

                    {/* Feature badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-16">
                        <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                        🛍️ Easy Shopping
                        </div>
                        <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                        🚀 Fast Delivery
                        </div>
                        <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                        🔒 Secure Payment
                        </div>
                        <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                        📱 Mobile First
                        </div>
                    </div>
                    </div>
                </div>

                {/* Bottom decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" className="w-full h-20 fill-current text-white/5">
                    <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3L1200,139L1200,200L0,200Z"></path>
                    </svg>
                </div>
            </div>
        </>
    );
}
