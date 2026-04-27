'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Sponsor from './components/sponsor';


const slides = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    alt: 'team collaboration',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);

  
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);



  return (
    <>


      <section className="w-full min-h-[80vh] pt-24 pb-8 bg-gray-50 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className={`p-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xs font-semibold text-gray-500 mb-4">Shaping the Digital Future</p>
           

            <h1 className="slide-up-2 text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Solusi Teknologi, <br />
              Kreativitas, & Akademik
            </h1>

            <p className="slide-up-3 text-gray-600 mb-6">
              Mendorong transformasi digital yang relevan, fungsional, dan
              berkelanjutan untuk bisnis dan dunia pendidikan. PT Intiio
              Academic & Technology hadir untuk menjawab tantangan modern
              dengan pendekatan inovatif dan terintegrasi.
            </p>

            <div className="slide-up-4 flex gap-4 ">
              <a href='/about' className="bg-orange-600 cursor-pointer text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-orange-700 hover:scale-105 transition-all duration-200">
                Tentang Kami
              </a>
              <a href="/portfolio" className="border border-gray-400 cursor-pointer font-bold px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200">
                VIEW OUR WORK
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT - SLIDESHOW */}
          <div className="fade-in-right relative flex justify-center py-8">
            {/* Image Slideshow */}
            <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image
                key={current}
                src={`${slides[current].src}?auto=format&fit=crop&w=800&q=80`}
                alt={slides[current].alt}
                fill
                className={`object-cover transition-all duration-500 ${animating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          
            </div>

            {/* Floating Cards */}
            <div className="float-card-1 absolute top-0  bg-white shadow-lg rounded-lg px-4 py-3 text-sm border border-orange-100">
              <p className="font-semibold">15+ Instruktur</p>
              <p className="text-gray-500">Berpengalaman di IT</p>
            </div>

            <div className="float-card-2 absolute bottom-5 left-0 bg-white shadow-lg rounded-lg px-4 py-3 text-sm border border-orange-100">
              <p className="font-semibold">100+ Projects</p>
              <p className="text-gray-500">Telah diselesaikan</p>
            </div>

            <div className="float-card-3 absolute bottom-0 right-5 bg-white shadow-lg rounded-lg px-4 py-3 text-sm border border-orange-100">
              <p className="font-semibold">100+ Client</p>
              <p className="text-gray-500">Merasa Puas</p>
            </div>
          </div>
        </div>
        
      </section>

           
      <Sponsor />
    </>
  );
};

export default HeroSection;
