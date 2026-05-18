'use client'

import { Award, Handshake, Lightbulb, Rocket, ShieldCheck, Star, Target, TrendingUp } from "lucide-react";
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import useReveal from "../../hooks/useReveal";
import OrganiasiSection from "./components/organisasi";


const AboutUs = () => {
  const { lang,t }= useLanguage();
  const fullText = useMemo(() => (lang === "en" ? t("about_title2") : t("about_title2")), [lang, t]);
 
  const [heroVisible, setHeroVisible] = useState(false);

  const { ref: visionRef, visible: visionVisible } = useReveal();
  const { ref: valuesRef, visible: valuesVisible } = useReveal();
  const { ref: achieveRef, visible: achieveVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();
  

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);


  return (
    <>
   

      <div className="w-full bg-gray-100 text-gray-800">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-30 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Left */}
            <div className="flex-1">
              <div className={`opacity-0 ${heroVisible ? 'anim-scale-in delay-1' : ''}`}>
                <p className="font-semibold text-sm text-gray-500 mb-2 px-4">Tentang Kami</p>
              </div>
              <div className="min-h-[120px] flex items-center px-4">
                <h1 className={`text-4xl  mt-2 md:text-5xl font-bold leading-tight whitespace-pre-line opacity-0 ${heroVisible ? 'anim-fade-up delay-2' : ''}`}>
                  {fullText.split(lang === 'en' ? 'Academic' : 'Akademik').map((part, i) =>
                    i === 0 ? part : (
                      <React.Fragment key={i}>
                        <span className="text-orange-500">{lang === 'en' ? 'Academic' : 'Akademik'}</span>
                        {part.split(lang === 'en' ? 'Technological' : 'Teknologi').map((sub, j) =>
                          j === 0 ? sub : (
                            <React.Fragment key={j}>
                              <span className="text-orange-500">{lang === 'en' ? 'Technological' : 'Teknologi'}</span>
                              {sub}
                            </React.Fragment>
                          )
                        )}
                      </React.Fragment>
                    )
                  )}
                </h1>
              </div>
              <p className={`mt-6 px-4 text-xs md:text-sm text-gray-400 opacity-0 text-justify w-120 ${heroVisible ? 'anim-fade-up delay-3' : ''}`}>
                Intio Academic & Technology adalah perusahaan yang bergerak di bidang teknologi, desain kreatif, dan layanan akademik. Kami menghadirkan solusi terintegrasi yang 
                dirancang untuk menjawab kebutuhan bisnis, institusi pendidikan, dan individu di tengah percepatan transformasi digital
              </p>
              <div className={`px-4 opacity-0 ${heroVisible ? 'anim-fade-up delay-4' : ''}`}>
                <button className="mt-8 bg-biru-dark cursor-pointer text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-800">
                 Kontak Kami →
                </button>
              </div>
            </div>
            {/* Image Right */}
            <div className={`flex-1 opacity-0 ${heroVisible ? 'anim-fade-left delay-3' : ''}`}>
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Hero"
                unoptimized
                width={60}
                height={70}
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

      
        {/* Achievements */}
        <div ref={achieveRef} className=" bg-biru-dark">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div>
            <div className={`opacity-0 ${achieveVisible ? 'anim-fade-up delay-1' : ''} mb-12`}>
              <p className="text-sm font-semibold tracking-widest uppercase text-orange-500 mb-2">Kepercayaan & Pencapaian</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 max-w-xl">Dipercaya oleh Perusahaan & Institusi di Seluruh Indonesia</h2>
                <p className="text-gray-400 text-sm max-w-sm text-justify">Selama lebih dari beberapa tahun, kami telah mendampingi institusi pendidikan, perusahaan swasta, dan lembaga pemerintah dalam perjalanan transformasi digital mereka.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { value: '70+', label: 'Proyek Selesai', icon: <TrendingUp size={20} className="text-orange-500" /> },
                { value: '98%', label: 'Kepuasan Client', icon: <Star size={20} className="text-orange-500" /> },
                { value: '100%', label: 'Garansi Layanan', icon: <Handshake size={20} className="text-orange-500" /> },
                { value: '5+', label: 'Aplikasi Berjalan', icon: <Award size={20} className="text-orange-500" /> },
              ].map((a, i) => (
                <div
                  key={i}
                  className={`opacity-0 ${achieveVisible ? 'anim-fade-up' : ''} bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center`}
                  style={{ animationDelay: `${i * 0.12 + 0.2}s` }}
                >
                  <div className="flex justify-center mb-3">{a.icon}</div>
                  <p className="text-4xl font-extrabold text-blue-950 mb-1">{a.value}</p>
                  <p className="text-sm text-gray-500">{a.label}</p>
                </div>
              ))}
            </div>
           
          </div>
        </section>
        </div>

        {/* Vision & Mission */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-22 grid md:grid-cols-2 gap-10">
          <div ref={visionRef} className={`opacity-0 ${visionVisible ? 'anim-fade-left delay-1' : ''}`}>
            <div className="flex flex-col items-center gap-3 mb-4 md:flex-row md:items-center md:justify-start">
              <Rocket className="text-orange-500" size={28} />
              <h3 className="text-2xl font-bold text-orange-500">Visi Perusahaan</h3>
            </div>
            <div className="border border-gray-300 rounded-2xl p-6 bg-white shadow-xl">
              <p className="text-gray-600 text-sm text-justify">
                Menjadi mitra terpercaya dalam mendampingi organisasi, perusahaan, dan individu dalam menjalani 
                transformasi digital yang berkelanjutan serta pengembangan sumber daya manusia yang unggul, 
                khususnya di bidang teknologi informasi dan pendidikan. Kami berkomitmen menghadirkan solusi inovatif, aman, 
                dan mudah diakses, yang tidak hanya meningkatkan efisiensi operasional, 
                tetapi juga membuka peluang baru untuk pertumbuhan, kolaborasi, dan penciptaan nilai tambah.
                
                
                 </p>
            
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
                <li>Menyediakan layanan berkualitas tinggi</li>
                <li>Membangun hubungan jangka panjang dengan klien</li>
                <li>Terus meningkatkan kompetensi tim</li>
                <li>Berkontribusi positif terhadap masyarakat</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <div ref={valuesRef}>
        <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-22">
          <div className={`opacity-0 ${valuesVisible ? 'anim-fade-up delay-1' : ''}`}>
            <p className="text-sm font-semibold tracking-widest uppercase text-orange-500 mb-2">{t('about_values_label')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">{t('about_values_title')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={28} className="text-orange-500" />, title: 'Integritas', desc: 'Setiap keputusan dan solusi yang kami hadirkan dilandasi kejujuran, transparansi, dan tanggung jawab penuh kepada klien.'},
              { icon: <Lightbulb size={28} className="text-orange-500" />, title: 'Inovasi', desc: 'Kami terus berinovasi untuk memberikan solusi terbaik kepada klien.' },
              { icon: <Handshake size={28} className="text-orange-500" />, title: 'Kemitraan', desc: 'Kami menjalin hubungan yang kuat dan berkelanjutan dengan klien dan mitra bisnis.' },
              { icon: <Star size={28} className="text-orange-500" />, title: 'Kualitas', desc: 'Kami berkomitmen untuk memberikan kualitas terbaik dalam setiap proyek yang kami kerjakan.' },
            ].map((v, i) => (
              <div
                key={i}
                className={`opacity-0 ${valuesVisible ? 'anim-fade-up' : ''} bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                style={{ animationDelay: `${i * 0.12 + 0.1}s` }}
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
        </div>

        <OrganiasiSection />

       {/* CTA */}
<section className="w-full bg-orange-600 bg-gray-200 py-16 bottom-0 p-8">
  <div
    ref={ctaRef}
    className={`mx-auto text-center py-12 px-6 rounded-sm opacity-0 ${
      ctaVisible ? 'anim-scale-in delay-1' : ''
    }`}
  >
    <h2 className="text-white text-2xl md:text-3xl font-semibold">
      {t('about_cta_title')}
    </h2>
    <p className="text-orange-100 text-sm mt-3 max-w-2xl mx-auto">
      {t('about_cta_desc')}
    </p>
    <div className="mt-6 flex justify-center gap-4">
      <button className="bg-white text-orange-600 px-5 py-2 text-sm font-semibold rounded hover:bg-orange-50 transition-colors">
        {t('about_cta_button')}
      </button>
      <Link
        href="/portfolio"
        className="border border-white cursor-pointer text-white px-5 py-2 text-sm font-semibold rounded hover:bg-white hover:text-orange-600 transition"
      >
        {t('about_cta_button2')}
      </Link>
    </div>
  </div>
</section>


      </div>
    </>
  );
};

export default AboutUs;
