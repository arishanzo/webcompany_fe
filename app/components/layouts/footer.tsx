'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
      const pathname = usePathname();
        const [activeNav, setActiveNav] = useState(pathname === '/' ? true : false);
         const { t } = useLanguage();
    
    
     const handleNavClick = () => {
        setActiveNav(true);
    }

    return (
       <footer className="bottom-0 w-full bg-biru-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
             
             
                <div className="grid grid-cols-1 mb-8">
                      <div className=" items-center text-center md:text-start space-x-8">
                 
                    {/* Company Info */}
                       <Link href="/" 
                       onClick={ () =>handleNavClick()}
                       className={` ${pathname === '/' ? 'text-orange-600 font-bold' : 'text-white'}  text-xs hover:text-blue-600 transition-colors font-light`}>
                         {t('nav_home')}
                        </Link>
                        <Link 
                        onClick={ () => handleNavClick()}
                        href="/about"  className={` ${pathname === '/about' ? 'text-orange-600 font-bold' : 'text-white'}  text-xs hover:text-blue-600 transition-colors font-light`}>
                           {t('nav_about')}
                        </Link>
                        <Link 
                        onClick={ () => handleNavClick()}
                        href="/layanan"  className={` ${ pathname === '/layanan' ? 'text-orange-600 font-bold' : 'text-white'}  text-xs hover:text-blue-600 transition-colors font-light`}>
                         {t('nav_services')}
                        </Link>
                        <Link 
                        onClick={ () => handleNavClick()}
                        href="/portfolio"  className={` ${ pathname === '/portfolio' ? 'text-orange-600 font-bold' : 'text-white'}  text-xs hover:text-blue-600 transition-colors font-light`}>
                             {t('nav_portfolio')}
                        </Link>
                          <Link 
                        onClick={ () => handleNavClick()}
                          href="/berita"  className={` ${pathname === '/berita' ? 'text-orange-600 font-bold' : 'text-white'}  text-xs hover:text-blue-600 transition-colors font-light`}>
                           {t('nav_news')}
                        </Link>
                        <Link 
                          onClick={ () => handleNavClick()}
                        href="/contact"  className={` ${pathname === '/contact' ? 'text-orange-600 font-bold' : 'text-white'}  text-xs hover:text-blue-600 transition-colors font-light`}>
                             {t('nav_contact')}
                        </Link>
                        </div>
                        </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2026 Entio Academic & Technologhy. <span className='text-gray-400'>All rights reserved.</span><br/> version.01
                    </p>
                    <div className="flex gap-6 text-sm">
                         <Link href="https://www.instagram.com/eintio.id?igsh=NWQxZDVkZnF2bnRu" className="w-10 h-10  hover:bg-white/20  flex items-center justify-center transition-all hover:scale-110">
                               <FaInstagram className='h-5 w-5'/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/pt-eintio-id-533224391" className="w-10 h-10  hover:bg-white/20  flex items-center justify-center transition-all hover:scale-110">
                                <FaLinkedin className='h-5 w-5' />
                            </Link>
                            <Link href="https://www.tiktok.com/@eintio.edu.tech?_r=1&_t=ZS-92z0zub8ofF" className="w-10 h-10 hover:bg-white/20  flex items-center justify-center transition-all hover:scale-110">
                               <FaTiktok className='h-5 w-5' />
                            </Link>
                            <Link href="https://x.com/EintioTech" className="w-10 h-10  hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110">
                               <FaTwitter className='h-5 w-5' />
                            </Link>
                             <Link href="https://www.facebook.com/profile.php?id=61583125063405" className="w-10 h-10  hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110">
                               <FaFacebook className='h-5 w-5' />
                            </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;