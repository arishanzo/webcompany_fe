'use client';

import Image from "next/image";
import InfoItem from "./infoItem";
import InputText from "../ui/inputtext";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {

  const { t } = useLanguage();
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
  const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=800&height=400&center=lonlat:110.5076,-7.3319&zoom=12&apiKey=${apiKey}`;

  return (
    <>
  
    <div className="w-full min-h-screen bg-[#f7f7f7] text-[#111] font-sans">

      {/* Hero */}
      <section
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 flex h-full flex-col justify-center px-6 max-w-7xl mt-22 mx-auto w-full">
          <p className="hero-label text-sm tracking-[0.35em] font-medium uppercase text-gray-800 mb-5">
            {t('contact_title')}
          </p>
          <h1 className="hero-title max-w-2xl text-5xl md:text-6xl font-bold leading-tight tracking-tight text-black">
            {t('contact_title2')}
          </h1>
          <p className="hero-desc mt-8 max-w-xl text-xl text-gray-600 leading-relaxed text-justify">
            {t('contact_subtitle')}
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">

        {/* Form */}
        <div className="form-card input-focus-ring bg-white border border-gray-300 rounded-xl p-10 min-h-[760px]">
          <h2 className="text-4xl font-semibold text-[#0F2747] mb-4">{t('contact_form_title')}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
           {t('contact_form_subtitle')}
          </p>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <InputText label={t('contact_form_nama')} placeholder="" />
            <InputText label={t('contact_form_alamat')} placeholder="" />
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <InputText label={t('contact_form_perusahaan')} placeholder="" />
            <InputText label={t('contact_form_subjek')} placeholder="" />
          
          </div>

          <div className="mb-8">
            <label className="text-sm text-gray-600 block mb-2">{t('contact_form_pesan')}</label>
            <textarea
              placeholder=""
              className="w-full h-40 rounded-md bg-[#f2f4fa] px-4 py-4 resize-none outline-none transition-shadow"
            />
          </div>

          <button className="btn-shine text-white px-10 py-4 rounded-md font-medium text-lg">
            {t('contact_button')}
          </button>
        </div>

        {/* Info + Map */}
        <div className="space-y-8">
          <div className="info-card bg-[#05224B] rounded-xl p-10 text-white min-h-[420px] shadow-lg">
            <h3 className="text-3xl font-semibold mb-10"> {t('contact_card_title')}</h3>
            <div className="space-y-10">
              <div className="info-item-anim"><InfoItem title= {t('contact_card_email')}value="contact@eintio.id" icon="✉" /></div>
              <div className="info-item-anim"><InfoItem title= {t('contact_card_telepon')} value="62 81122 225 804" icon="☎" /></div>
              <div className="info-item-anim"><InfoItem title= {t('contact_card_alamat')} value="Jln. Menjangan No.25A, Salatiga, Jawa Tengah" icon="📍" /></div>
            </div>
          </div>

          <div className="map-card map-hover rounded-xl overflow-hidden shadow-md h-[290px] bg-white">
            <Image
              src={mapUrl}
              width={90}
              height={90}
              alt="Map"
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>

  {/* CTA */}
<section className="w-full bg-[#f7f7f7] py-10 px-6">
  <div className="anim-fade-up relative max-w-7xl mx-auto bg-blue-950 text-white py-12 px-6 rounded-xl shadow-xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
    
    {/* Konten kiri */}
    <div className="flex-1 text-center md:text-left">
      <p className="text-sm tracking-widest uppercase text-blue-300 mb-3 font-medium">
        Solusi Terbaik untuk Bisnis Anda
      </p>
      <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
        Tingkatkan Pertumbuhan dengan Layanan Premium Kami
      </h2>
      <p className="text-gray-300 text-sm max-w-lg mx-auto md:mx-0 mb-6">
        Jangan biarkan peluang lewat begitu saja. Dengan dukungan tim ahli dan strategi yang terbukti, 
        bisnis Anda bisa berkembang lebih cepat, lebih aman, dan lebih menguntungkan. 
        Mulai sekarang dan rasakan perbedaannya!
      </p>

      {/* Button di bawah teks */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-semibold rounded transition-colors">
          Mulai Sekarang
        </button>
        <button className="border border-white text-white px-6 py-3 text-sm font-semibold rounded hover:bg-white hover:text-blue-950 transition-colors">
          Konsultasi Gratis
        </button>
      </div>
    </div>

    {/* Ornamen kotak-kotak transparan di kanan */}
    <div className="flex-shrink-0 relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mt-8 md:mt-0">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="bg-white/10 rounded-sm"></div>
        ))}
      </div>
    </div>
  </div>
</section>

    </div>
    </>
  );
};

export default Contact;
