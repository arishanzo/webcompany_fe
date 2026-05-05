'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Sponsor from './components/sponsor';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, BadgeCheck, BookOpen, Mail, Newspaper, Star, Users } from 'lucide-react';
import Link from 'next/link';
import useReveal from '../hooks/useReveal';


const slides = [
  {
    src: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'team collaboration',
  },
];

 const items = [
    {
      title: "Solusi & Program Unggulan",
      desc: "Tingkatkan skill & bisnis Anda dengan layanan teknologi, desain kreatif, dan pendampingan akademik terbaik.",
      icon: BookOpen,
      link: "/layanan",
      cta: "Jelajahi Sekarang",
    },
    {
      title: "Insight & Tren Terbaru",
      desc: "Akses strategi, tips, dan tren terbaru untuk membantu Anda tetap unggul di era digital.",
      icon: Newspaper,
      link: "/berita",
      cta: "Baca Artikel",
    },
    {
      title: "Konsultasi Gratis",
      desc: "Diskusikan kebutuhan Anda bersama tim kami dan temukan solusi terbaik hari ini.",
      icon: Mail,
      link: "/contact",
      cta: "Hubungi Kami",
    },
  ];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);

  const { t} = useLanguage();


  const { ref: HiglightsRef, visible: HiglightsVisible } = useReveal();
  const { ref: SellingRef, visible: SellingVisible } = useReveal();
  const { ref: CtaRef, visible: CtaVisible } = useReveal();
  
  
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


      <section className="w-full min-h-[80vh] pt-24 pb-8 bg-gray-100 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className={`p-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xs font-semibold text-gray-500 mb-4">{t("hero_title")}</p>
           

            <h1 className="slide-up-2 text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
             Solusi Teknologi, Kreativitas, & Akademik
            </h1>

            <p className="slide-up-3 text-gray-600 mb-6 text-justify">
             Menghadirkan solusi berbasis teknologi yang inovatif, mengasah kreativitas tanpa batas, dan memperkuat fondasi akademik untuk membangun masa depan yang berdaya saing global.
            </p>

            <div className="slide-up-4 flex gap-4 ">
              <a href='/about' className="bg-orange-600 cursor-pointer text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-orange-700 hover:scale-105 transition-all duration-200">
                 Tentang Kami
              </a>
              <a href="/portfolio" className="border border-gray-400 cursor-pointer font-bold px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200">
                Lihat Portfolio
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
                unoptimized
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
              <p className="font-semibold">100+ Proyek</p>
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
        
 <section ref={HiglightsRef} className="bg-biru-dark py-20 px-6">
      <div className= {`opacity-0 ${HiglightsVisible ? 'anim-scale-in delay-1' : ''} max-w-7xl mx-auto text-start`}>
        <h2 className="text-4xl font-bold text-white mb-4">
          Mulai Lebih Cepat
        </h2>
        <p className="text-gray-200 mb-12 max-w-2xl">
          Pilih langkah terbaik Anda dan mulai perjalanan menuju hasil yang lebih
          maksimal bersama kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400/40"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-500/10 mb-6 group-hover:bg-orange-500/20 transition">
                  <Icon className="w-7 h-7 text-orange-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-blue-200 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex items-center text-orange-400 font-medium group-hover:gap-3 gap-2 transition-all">
                  {item.cta}
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:via-orange-500/10 transition duration-500" />
              </a>
            );
          })}
        </div>
      </div>

      
    </section>

  <section ref={SellingRef} className=" bg-gray-100 md:py-32 py-22 p-8"> 
    {/* SELLING SECTION */}
<div className={`opacity-0 ${SellingVisible ? 'anim-fade-left delay-1' : ''} max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-left`}>
  {/* Card 1 */}
  <div className="bg-white/10 border border-gray-200 rounded-2xl p-8 backdrop-blur-xl 
                  hover:scale-105 hover:shadow-xl transition-transform duration-300">
    <Star className="text-orange-400 mb-4 w-8 h-8" />
    <h4 className="text-gray-800 font-semibold text-lg mb-2">Terbukti Berkualitas</h4>
    <p className="text-gray-600 text-sm leading-relaxed">
      Dipercaya oleh banyak klien & pelajar untuk menghasilkan solusi yang nyata dan berdampak.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white/10 border border-gray-200  rounded-2xl p-8 backdrop-blur-xl 
                  hover:scale-105 hover:shadow-xl transition-transform duration-300">
    <Users className="text-orange-400 mb-4 w-8 h-8" />
    <h4 className="text-gray-800  font-semibold text-lg mb-2">Pendekatan Personal</h4>
    <p className="text-gray-600 text-sm leading-relaxed">
      Setiap solusi dirancang sesuai kebutuhan Anda, bukan template umum.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white/10 border border-gray-200 rounded-2xl p-8 backdrop-blur-xl 
                  hover:scale-105 hover:shadow-xl transition-transform duration-300">
    <BadgeCheck className="text-orange-400 mb-4 w-8 h-8" />
    <h4 className="text-gray-800 font-semibold text-lg mb-2">Hasil yang Terukur</h4>
    <p className="text-gray-600 text-sm leading-relaxed">
      Fokus pada hasil nyata: peningkatan skill, performa bisnis, dan efisiensi kerja.
    </p>
  </div>
</div>
</section>

    

    <section ref={CtaRef} className="w-full bg-orange-600 py-24 p-8">
    {/* CTA SECTION */}
<div className={`opacity-0 ${CtaVisible ? 'anim-fade-up delay-1' : ''} text-center`}>
  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
    Siap Meningkatkan Skill & Bisnis Anda?
  </h3>
  <p className="text-gray-200 max-w-2xl mx-auto mb-8">
    Bergabunglah bersama kami untuk mendapatkan solusi teknologi, kreativitas, 
    dan akademik yang terbukti efektif. Mulai perjalanan Anda menuju hasil nyata 
    dengan pendekatan personal dan terukur.
  </p>

  <Link
    href="/contact"
    className="inline-flex items-center gap-3 bg-white text-orange-600 font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-700 hover:text-white"
  >
    Mulai Sekarang
    <ArrowRight className="w-5 h-5" />
  </Link>

</div>

</section>


    </>
  );
};

export default HeroSection;
