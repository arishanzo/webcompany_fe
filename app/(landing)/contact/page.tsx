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
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="hero-label text-sm tracking-[0.35em] font-medium uppercase text-gray-800 mb-5">
               {t('contact_title')}
          </p>
          <h1 className="hero-title max-w-4xl text-5xl md:text-6xl font-bold leading-tight tracking-tight text-black ">
              {t('contact_title2')}
          </h1>
          <p className="hero-desc mt-8 max-w-3xl text-xl text-gray-600 leading-relaxed text-justify ">
              {t('contact_subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">

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
    </div>
    </>
  );
};

export default Contact;
