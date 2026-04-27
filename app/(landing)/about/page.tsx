'use client'

import { Rocket, Target } from "lucide-react";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from "react";
import useCountUp from "../../hooks/useCountUp";

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
};

const AboutUs = () => {
  const fullText = `Sinergi Presisi Akademik &\nInovasi Teknologi`;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);

  const { ref: statsRef, visible: statsVisible } = useReveal();
  const { ref: visionRef, visible: visionVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!heroVisible) return;
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, heroVisible]);

  const client = useCountUp(5);
  const Projects = useCountUp(100);
  const support = useCountUp(27);

  return (
    <>
   

      <div className="w-full bg-gray-50 py-12 text-gray-800">

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className={`opacity-0 ${heroVisible ? 'anim-scale-in delay-1' : ''}`}>
             <p className="font-semibold text-sm text-gray-500 mb-4">About Us</p>
            
          </div>

<div className="min-h-[120px] flex items-center justify-center">
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line opacity-0 ${heroVisible ? 'anim-fade-up delay-2' : ''}`}>
            {displayedText.split('Akademik').map((part, i) =>
              i === 0 ? part : (
                <React.Fragment key={i}>
                  <span className="text-orange-500">Akademik</span>
                  {part.split("Teknologi").map((sub, j) =>
                    j === 0 ? sub : (
                      <React.Fragment key={j}>
                        <span className="text-orange-500">Teknologi</span>
                        {sub}
                      </React.Fragment>
                    )
                  )}
                </React.Fragment>
              )
            )}
          </h1>
</div>
          <p className={`mt-6 text-xs md:text-lg text-gray-400 md:max-w-5xl p-2 mx-auto opacity-0 ${heroVisible ? 'anim-fade-up delay-3' : ''}`}>
          PT Eintio adalah perusahaan yang bergerak di bidang teknologi, desain kreatif, dan layanan akademik. Kami menghadirkan solusi terintegrasi yang dirancang untuk menjawab kebutuhan bisnis, institusi pendidikan, dan individu di tengah percepatan transformasi digital        </p>

          <div className={`opacity-0 ${heroVisible ? 'anim-fade-up delay-4' : ''}`}>
            <button className="mt-8 bg-biru-dark cursor-pointer text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-800">
              Kontak Kami →
            </button>
          </div>
       
        </section>

        {/* Stats Section */}
        <section className="bg-blue-950 text-white py-22">
          <div ref={statsRef} className="max-w-6xl mx-auto grid grid-cols-3 text-center">
            {[
              { value: `${client}+`, label: 'Experience' },
              { value: `${Projects}+` , label: 'Projects' },
              { value: `${support}/7`, label: 'Support' },
            ].map((item, i) => (
              <div key={i} className={`opacity-0 ${statsVisible ? `anim-fade-up` : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>
                <h2 className="text-4xl md:text-6xl font-bold">{item.value}</h2>
                <p className="mt-2 text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-22 grid md:grid-cols-2 gap-10">
          <div ref={visionRef} className={`opacity-0 ${visionVisible ? 'anim-fade-left delay-1' : ''}`}>
            <div className="flex flex-col items-center gap-3 mb-4 md:flex-row md:items-center md:justify-start">
              <Rocket className="text-orange-500" size={28} />
              <h3 className="text-2xl font-bold text-orange-500">Visi Perusahaan</h3>
            </div>
            <div className="border border-gray-300 rounded-2xl p-6 bg-white shadow-xl">
              <p className="text-gray-600 text-sm">
              Menjadi mitra terpercaya dalam transformasi digital dan pengembangan sumber daya manusia di bidang teknologi informasi dan pendidikan              </p>
            </div>
          </div>

          <div className={`opacity-0 ${visionVisible ? 'anim-fade-right delay-2' : ''}`}>
            <div className="flex flex-col items-center gap-3 mb-4 md:flex-row md:items-center md:justify-start">
              <Target className="text-orange-500" size={28} />
              <h3 className="text-2xl font-bold text-orange-500 text-center md:text-left">Misi Perusahaan</h3>
            </div>
            <div className="border border-gray-300 rounded-2xl p-6 bg-white shadow-xl">
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Memberikan solusi teknologi inovatif</li>
                <li>Menyediakan pendidikan IT berkualitas</li>
                <li>Memberdayakan individu dan organisasi</li>
                 <li>Memberdayakan individu dan organisasi</li>
                 <li>Mengembangkan produk kreatif</li>
                 <li>Membangun ekosistem kolaboratif</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-gray-100 py-16 p-8">
          <div ref={ctaRef} className={`max-w-5xl mx-auto bg-blue-950 text-center py-12 px-6 rounded-sm opacity-0 ${ctaVisible ? 'anim-scale-in delay-1' : ''}`}>
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              Siap Jadi Perubahan Di Jaman Sekarang?
            </h2>
            <p className="text-gray-300 text-sm mt-3 max-w-2xl mx-auto">
              Hubungi tim ahli kami hari ini untuk konsultasi gratis mengenai kebutuhan teknologi atau jalur karir IT Anda.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-orange-500 text-white px-5 py-2 text-sm font-semibold hover:bg-orange-600">
                HUBUNGI KAMI
              </button>
              <Link
                href="/portfolio"
                className="border border-white cursor-pointer text-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-blue-950 transition"
              >
                LIHAT PORTOFOLIO
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutUs;
