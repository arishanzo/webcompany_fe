'use client'

import { CheckCircle2, ChevronLeft, ChevronRight, Globe } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useFadeUp } from "../../hooks/useFadeUp";
import akademiCards from "../../lib/layananCards";

const Services = () => {
    const [current, setCurrent] = useState(0);
    const total = akademiCards.length;
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAuto = () => {
        autoRef.current = setInterval(() => setCurrent((p) => (p + 1) % total), 3000);
    };

    useEffect(() => {
        startAuto();
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, []);

    const prev = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        setCurrent((p) => (p - 1 + total) % total);
        startAuto();
    };

    const next = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        setCurrent((p) => (p + 1) % total);
        startAuto();
    };

    const looped = [...akademiCards, ...akademiCards];

    const layananRef = useFadeUp();
    const akademiRef = useFadeUp();
    const ctaRef = useFadeUp();

    return (
        <>
        

        <div className="font-sans text-gray-800">
          {/* HERO */}
          <section className="relative text-white bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920')" }}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative max-w-7xl mx-auto px-6 py-28">
              <p className="hero-line-1 text-sm tracking-widest text-gray-300 mb-4">
                EKSPERTIS DIGITAL & EDUKASI
              </p>
              <h1 className="hero-line-2 text-4xl md:text-5xl font-bold leading-tight mb-6">
                Solusi Teknologi & Transformasi Akademik
              </h1>
              <p className="hero-line-3 text-gray-300 max-w-xl mb-8">
                Kami menggabungkan presisi akademis dengan inovasi teknologi untuk
                membangun masa depan digital yang tangguh dan cerdas.
              </p>
              <div className="hero-line-4 flex gap-4">
                <button className="btn-shine bg-orange-600 px-6 py-3 rounded font-semibold">
                  MULAI KONSULTASI
                </button>
                <button className="btn-outline-hover border border-gray-400 px-6 py-3 rounded">
                  PELAJARI AKADEMI
                </button>
              </div>
            </div>
          </section>

          {/* LAYANAN */}
          <section className="py-16 bg-white">
            <div ref={layananRef} className="anim-fade-up max-w-7xl mx-auto px-6">
              <p className="text-sm text-gray-500 mb-2">• Layanan Teknologi</p>
              <h2 className="text-3xl font-bold mb-10">Pengembangan Digital</h2>

              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="card-hover border border-gray-200 p-6 rounded-lg py-16">
                  <Globe className="icon-spin text-gray-800 w-10 h-10 mb-8" />
                  <h3 className="text-xl font-semibold mb-4">Website Kustom & Web Apps</h3>
                  <p className="text-gray-600 mb-6">
                    Membangun platform web performa tinggi dengan arsitektur modern yang skalabel dan aman.
                  </p>
                  <button className="text-sm font-semibold pt-8 hover:text-orange-600 transition-colors">
                    LIHAT DETAIL PROYEK →
                  </button>
                </div>

                <div className="card-hover bg-biru-dark text-white p-6 rounded-lg py-16">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-15 h-15 mb-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6 9.48l1.43-2.48a.5.5 0 00-.87-.5l-1.46 2.53a8.1 8.1 0 00-8.4 0L7.84 6.5a.5.5 0 00-.87.5l1.43 2.48A7.96 7.96 0 004 17h16a7.96 7.96 0 00-2.4-7.52zM9 20a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                  </svg>
                  <h3 className="text-xl font-semibold mb-4">Aplikasi Mobile</h3>
                  <p className="text-gray-300">
                    Pengembangan aplikasi iOS dan Android native atau cross-platform dengan performa lancar.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AKADEMI */}
          <section className="py-16 bg-gray-100">
            <div ref={akademiRef} className="anim-fade-up max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold">Akademi & Edukasi IT</h2>
                  <p className="text-gray-600">Program pelatihan intensif untuk mencetak talenta digital.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={prev} className="bg-gray-300 hover:bg-gray-400 p-2 rounded cursor-pointer transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={next} className="bg-gray-300 hover:bg-gray-400 p-2 rounded cursor-pointer transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-stretch">
                {/* carousel */}
                <div className="overflow-hidden flex flex-col h-full">
                  <div
                    className="flex gap-6 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(calc(-${current * 50}% - ${current * 12}px))` }}
                  >
                    {looped.map((card, idx) => (
                      <div key={idx} className="card-hover bg-white rounded-lg shadow overflow-hidden flex flex-col flex-shrink-0 w-[calc(50%-12px)] h-full">
                        <div className="overflow-hidden">
                          <Image
                            src={card.img}
                            alt={card.title}
                            width={800}
                            height={300}
                            className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          {card.badge && (
                            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded w-fit mb-2">
                              {card.badge}
                            </span>
                          )}
                          <h3 className="text-lg font-semibold mt-2 mb-2">{card.title}</h3>
                          <p className="text-gray-600 mb-4">{card.desc}</p>
                          <button className="bg-gray-200 hover:bg-gray-300 w-full py-2 rounded mt-auto transition-colors">{card.btn}</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* dots */}
                  <div className="flex justify-center gap-2 mt-8">
                    {akademiCards.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { if (autoRef.current) clearInterval(autoRef.current); setCurrent(i); startAuto(); }}
                        className={`h-2 rounded-full transition-all duration-300 ${i === current % total ? 'bg-gray-700 w-4' : 'bg-gray-300 w-2'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* sertifikasi */}
                <div className="card-hover bg-biru-dark text-white p-6 rounded-lg flex flex-col">
                  <h3 className="text-lg font-semibold mb-4">Sertifikasi Internasional</h3>
                  <p className="text-sm text-gray-300 mb-12">
                    Persiapan ujian sertifikasi global untuk memvalidasi keahlian teknis Anda di mata dunia.
                  </p>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    {["AWS Solutions Architect", "CompTIA Security+", "Google Cloud Engineer"].map((item, i) => (
                      <li key={i} className={`flex items-center gap-2 anim-fade-up stagger-${i + 1}`}>
                        <CheckCircle2 className="text-yellow-500 w-5 h-5 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-white text-blue-900 w-full py-2 rounded mt-auto hover:bg-gray-100 transition-colors">INFO SERTIFIKASI</button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-orange-600 text-white py-16 text-center overflow-hidden relative">
            <div ref={ctaRef} className="anim-fade-up relative z-10">
              <h2 className="md:text-3xl text-xl font-bold mb-4">
                Siap Mengakselerasi Potensi Digital Anda?
              </h2>
              <p className="mb-8 text-orange-100">
                Hubungi tim ahli kami hari ini untuk konsultasi gratis.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-biru-dark px-6 py-3 rounded hover:opacity-90 transition-opacity hover:scale-105 transform duration-200">
                  HUBUNGI KAMI
                </button>
                <button className="btn-outline-hover border border-white px-6 py-3 rounded">
                  UNDUH PROSPEKTUS
                </button>
              </div>
            </div>
          </section>
        </div>
        </>
    )
}

export default Services
