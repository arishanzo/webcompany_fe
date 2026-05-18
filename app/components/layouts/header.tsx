'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const [activeNav, setActiveNav] = useState(pathname === '/' ? true : false);
    const { lang, setLang, t } = useLanguage();

     const [open, setOpen] = useState(false)
   
    const handleNavClick = () => {
        setActiveNav(true);
        setIsMenuOpen(false); 
    }


    return (
        <header className="fixed max-w-full top-0 left-0 right-0 z-50 mb-8 bg-white">
            <nav className="max-w-7xl mx-auto px-8 sm:px-6 bg-white/95 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                         <div className="flex items-center">
                            <span className="text-xl font-extrabold bg-orange-500 bg-clip-text text-transparent">
                                Eintio
                            </span>
                            </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" 
                        onClick={ () => handleNavClick()}
                        className= {`${activeNav  && pathname === '/' ? 'text-orange-600 font-extrabold' :  'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}>
                          {t('nav_home')}
                        </Link>
                        <Link href="/about" 
                          onClick={ () => handleNavClick()}
                       className= {`${pathname === '/about' ? 'text-orange-600 font-extrabold' :  'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}>
                            {t('nav_about')}
                        </Link>
                        
                           <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className={`flex items-center space-x-1 ${
                        pathname.startsWith('/layanan')
                            ? 'text-orange-600 font-extrabold'
                            : 'text-gray-700'
                        } hover:text-orange-600 transition-colors font-medium`}
                    >
                        {t('nav_services')}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute top-full mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                        <div className="py-2">
                            <Link
                            href="/layanan/layananpendidikan"
                            onClick={() => {
                                handleNavClick()
                                setOpen(false)
                            }}
                            className={`${
                                pathname === '/layanan/layananpendidikan'
                                ? 'text-orange-600 font-bold'
                                : 'text-gray-700'
                            } block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors`}
                            >
                            Layanan Akademik
                            </Link>
                            <Link
                            href="/layanan/layananteknologi"
                            onClick={() => {
                                handleNavClick()
                                setOpen(false)
                            }}
                            className={`${
                                pathname === '/layanan/layananteknologi'
                                ? 'text-orange-600 font-bold'
                                : 'text-gray-700'
                            } block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors`}
                            >
                            Layanan Teknologi
                            </Link>
                        </div>
                        </div>
                    )}
                    </div>

                        <Link 
                        href="/portfolio" 
                          onClick={ () => handleNavClick()}
                       className= {`${pathname === '/portfolio' ? 'text-orange-600 font-extrabold' :  'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}>
                            {t('nav_portfolio')}
                        </Link>

                         
                        
                          <Link 
                          href="/berita"
                            onClick={ () => handleNavClick()} 
                         className= {`${pathname === '/berita' ? 'text-orange-600 font-extrabold' :  'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}>
                            {t('nav_news')}
                        </Link>
                        <Link 
                        href="/contact" 
                          onClick={ () => handleNavClick()}
                         className= {`${pathname === '/contact' ? 'text-orange-600 font-extrabold' :  'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}>
                            {t('nav_contact')}
                        </Link>
                    </div>


                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                                  <div className="flex gap-1 bg-gray-100 p-1 rounded-full">
                            <button
                              onClick={() => setLang('id')}
                              className={`px-3 cursor-pointer py-1 rounded-full text-sm font-semibold transition ${
                                lang === 'id' ? 'bg-orange-500 text-white shadow' : 'text-gray-500 hover:bg-white hover:text-orange-500'
                              }`}>
                              ID
                            </button>
                            <button
                              onClick={() => setLang('en')}
                              className={`px-3 cursor-pointer py-1 rounded-full text-sm font-semibold transition ${
                                lang === 'en' ? 'bg-orange-500 text-white shadow' : 'text-gray-500 hover:bg-white hover:text-orange-500'
                              }`}>
                              EN
                            </button>
                        </div>

                        <a  href='https://wa.me/628816982294?text=Halo%20saya%20ingin%20konsultasi' 
                        target="_blank" 
                            rel="noopener noreferrer"
                         className="px-6 py-2.5 bg-orange-700 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium">
                            {t('nav_login')}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                       <div className="flex items-center space-x-2">
                           
                            <span className="text-xl font-extrabold bg-orange-500 bg-clip-text text-transparent">
                                Eintio
                            </span>
                            </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <nav className="space-y-2">
                               <Link 
                                href="/home" 
                                onClick={() => setIsMenuOpen(false)}
                                className= {`${pathname === '/' ? 'text-orange-600 ' : 'text-gray-900' } block px-4 py-3  hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium`}
                            >
                                {t('nav_home')}
                            </Link>
                            <Link 
                                href="/about" 
                               onClick={() => setIsMenuOpen(false)}
                                className= {`${pathname === '/about' ? 'text-orange-600 ' : 'text-gray-900' } block px-4 py-3  hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium`}
                           >
                                {t('nav_about')}
                            </Link>
                                            <div className="relative pl-4">
                    <button
                        onClick={() => setOpen(!open)}
                        className={`flex items-center space-x-1 ${
                        pathname.startsWith('/layanan')
                            ? 'text-orange-600 font-extrabold'
                            : 'text-gray-700'
                        } hover:text-orange-600 transition-colors font-medium`}
                    >
                        {t('nav_services')}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute top-full mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                        <div className="py-2">
                            <Link
                            href="/layanan/layananpendidikan"
                            onClick={() => {
                                handleNavClick()
                                setOpen(false)
                            }}
                            className={`${
                                pathname === '/layanan/layananpendidikan'
                                ? 'text-orange-600 font-bold'
                                : 'text-gray-700'
                            } block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors`}
                            >
                            Layanan Akademik
                            </Link>
                            <Link
                            href="/layanan/layananteknologi"
                            onClick={() => {
                                handleNavClick()
                                setOpen(false)
                            }}
                            className={`${
                                pathname === '/layanan/layananteknologi'
                                ? 'text-orange-600 font-bold'
                                : 'text-gray-700'
                            } block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors`}
                            >
                            Layanan Teknologi
                            </Link>
                        </div>
                        </div>
                    )}
                    </div>
                                            
                            <Link 
                                href="/portfolio" 
                               onClick={() => setIsMenuOpen(false)}
                                className= {`${pathname === '/portfolio' ? 'text-orange-600 ' : 'text-gray-900' } block px-4 py-3  hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium`}
                              >
                                {t('nav_portfolio')}
                            </Link>

                             

                            <Link 
                                href="/berita" 
                                onClick={() => setIsMenuOpen(false)}
                                className= {`${ pathname === '/berita' ? 'text-orange-600 ' : 'text-gray-900' } block px-4 py-3  hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium`}
                              >
                               {t('nav_news')}
                            </Link>

                            <Link 
                                href="/contact" 
                                 onClick={() => setIsMenuOpen(false)}
                                className= {`${pathname === '/contact' ? 'text-orange-600 ' : 'text-gray-900' } block px-4 py-3  hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium`}
                                >
                                {t('nav_contact')}
                            </Link>
                            
                            
                        </nav>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-200 space-y-3">

                          <a  href='https://wa.me/628816982294?text=Halo%20saya%20ingin%20konsultasi' 
                        target="_blank" 
                            rel="noopener noreferrer"

                         className="px-6 py-2.5 bg-orange-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;