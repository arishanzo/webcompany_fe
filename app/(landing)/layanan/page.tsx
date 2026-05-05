'use client'

import { CheckCircle2, ChevronLeft, ChevronRight, Smartphone, Code2, Database, Shield, Zap, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import akademiCards from "../../lib/layananCards";
import { useLanguage } from "../../context/LanguageContext";
import Link from "next/link";
import serviceList from "../../lib/servicesList";
import useReveal from "../../hooks/useReveal";


const Services = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();
  const total = akademiCards.length;
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const { ref: layananRef, visible: layananVisible } = useReveal();
  const { ref: webRef, visible: webVisible } = useReveal();
  const { ref: mobileRef, visible: mobileVisible } = useReveal();
  const { ref: akademiRef, visible: akademiVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* HERO */}
      <section className="relative text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-blue-900/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <span className={`inline-block text-xs tracking-widest text-orange-400 bg-orange-400/10 border border-orange-400/30 px-3 py-1 rounded-full mb-5 opacity-0 ${heroVisible ? 'hero-line-1' : ''}`}>
            {t('services_title')}
          </span>
          <h1 className={`text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl opacity-0 ${heroVisible ? 'hero-line-2' : ''}`}>
            {t('services_subtitle')}
          </h1>
          <p className={`text-gray-300 max-w-xl mb-10 text-lg leading-relaxed opacity-0 ${heroVisible ? 'hero-line-3' : ''}`}>
            {t('services_subtitle_hero')}
          </p>
          <div className={`flex flex-wrap gap-4 opacity-0 ${heroVisible ? 'hero-line-4' : ''}`}>
            <Link href="https://wa.me/6281122225804"
              className="btn-shine text-white px-7 py-3.5 rounded-lg font-semibold shadow-lg shadow-orange-600/30">
              {t('services_button')}
            </Link>
            <Link href="#layanan"
              className="btn-outline-hover border border-white/40 px-7 py-3.5 rounded-lg">
              {t('services_button2')}
            </Link>
          </div>
        </div>
      </section>

      {/* SEMUA LAYANAN */}
      <section id="layanan" className="py-20 bg-gray-100">
        <div ref={layananRef} className="max-w-7xl mx-auto px-6">
          <div className={`text-start mb-14 opacity-0 ${layananVisible ? 'anim-fade-up delay-1' : ''}`}>
            <span className="text-sm text-gray-700 font-semibold tracking-widest uppercase">• Layanan Teknologi</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Pengembangan Digital</h2>
            <p className="text-gray-500 max-w-xl">Solusi lengkap dari pengembangan produk digital hingga pelatihan SDM teknologi.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map(({ icon: Icon, color, bg, border, titleKey, descKey, features }, idx) => (
              <div key={titleKey}
                className={`opacity-0 ${layananVisible ? 'anim-fade-up' : ''} group bg-white border ${border} rounded-2xl p-6 card-hover flex flex-col`}
                style={{ animationDelay: `${idx * 0.12 + 0.2}s` }}>
                <div className={`${bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`${color} w-6 h-6`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{t(titleKey)}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">{t(descKey)}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL WEB & MOBILE */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* Web Dev */}
          <div ref={webRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`opacity-0 ${webVisible ? 'anim-fade-left delay-1' : ''}`}>
              <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase py-1 rounded-full">Web Development</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">{t('services_title3')}</h2>
              <p className="text-gray-500 leading-relaxed mb-6">{t('services_subtitle3')}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Code2, label: "Clean Code Architecture" },
                  { icon: Zap, label: "Performa Tinggi & SEO" },
                  { icon: Shield, label: "Keamanan Enterprise" },
                  { icon: Database, label: "Skalabel & Cloud-Ready" },
                ].map(({ icon: I, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                    <I className="w-4 h-4 text-blue-500" /> {label}
                  </div>
                ))}
              </div>
              <Link href="https://wa.me/6281122225804"
                className="btn-shine inline-block text-white px-6 py-3 rounded-lg font-semibold">
                {t('services_button3')}
              </Link>
            </div>
            <div className={`opacity-0 ${webVisible ? 'anim-fade-right delay-2' : ''} img-zoom relative rounded-2xl overflow-hidden shadow-2xl aspect-video`}>
              <Image src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800" alt="Web Dev" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm font-semibold text-gray-800">
                🚀 100+ Website Diluncurkan
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div ref={mobileRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 opacity-0 ${mobileVisible ? 'anim-fade-left delay-1' : ''} img-zoom relative rounded-2xl overflow-hidden shadow-2xl aspect-video`}>
              <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800" alt="Mobile App" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm font-semibold text-gray-800">
                📱 Android & iOS
              </div>
            </div>
            <div className={`order-1 md:order-2 opacity-0 ${mobileVisible ? 'anim-fade-right delay-2' : ''}`}>
              <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase py-1 rounded-full">Mobile Development</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">{t('services_title4')}</h2>
              <p className="text-gray-500 leading-relaxed mb-6">{t('services_subtitle4')}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Smartphone, label: "React Native & Flutter" },
                  { icon: Zap, label: "Animasi Smooth 60fps" },
                  { icon: Shield, label: "Secure Authentication" },
                  { icon: Users, label: "Push Notification" },
                ].map(({ icon: I, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                    <I className="w-4 h-4 text-blue-500" /> {label}
                  </div>
                ))}
              </div>
              <Link href="https://wa.me/6281122225804"
                className="btn-shine inline-block text-white px-6 py-3 rounded-lg font-semibold">
                Konsultasi Mobile App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AKADEMI CAROUSEL */}
      <section className="py-20 bg-gray-200 overflow-hidden">
        <div ref={akademiRef} className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 opacity-0 ${akademiVisible ? 'anim-fade-up delay-1' : ''}`}>
            <div>
              <span className="text-xs font-semibold text-orange-400 tracking-widest uppercase">• {t('services_card_title')}</span>
              <h2 className="text-3xl font-bold mt-2">{t('services_card_subtitle')}</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const card = akademiCards[(current + offset) % total];
              return (
                <div key={offset}
                  className={`opacity-0 ${akademiVisible ? 'anim-fade-up' : ''} relative rounded-2xl overflow-hidden group transition-all duration-500 ${offset === 0 ? "md:col-span-1 row-span-2" : ""}`}
                  style={{ animationDelay: `${offset * 0.15 + 0.2}s` }}>
                  <div className="relative aspect-video md:aspect-auto md:h-64">
                    <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {card.badge && (
                      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {card.badge}
                      </span>
                    )}
                    <div className="absolute text-white bottom-0 left-0 right-0 p-5">
                      <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{card.desc}</p>
                      <Link href="https://wa.me/6281122225804"
                        className="inline-block text-xs font-semibold bg-biru-dark hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                        {card.btn}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {akademiCards.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-orange-500 w-6" : "bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-20 text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div ref={ctaRef} className={`relative z-10 max-w-2xl mx-auto px-6 opacity-0 ${ctaVisible ? 'anim-scale-in delay-1' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services_cta_title')}</h2>
          <p className="mb-10 text-orange-100 text-lg">{t('services_cta_desc')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://wa.me/6281122225804"
              className="bg-white text-orange-600 font-bold px-8 py-3.5 rounded-lg hover:bg-orange-50 transition-all hover:scale-105 shadow-lg">
              {t('services_cta_button')}
            </Link>
            <Link href="/portfolio"
              className="btn-outline-hover border-2 border-white/60 px-8 py-3.5 rounded-lg font-semibold">
              {t('services_cta_button2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
