'use client';

import InfoItem from "./infoItem";
import InputText from "../ui/inputtext";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaThreads, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  return (
    <>
  
    <div className="w-full min-h-screen bg-[#f7f7f7] text-[#111] font-sans">

      {/* Hero */}
      <section
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 flex h-full flex-col justify-center px-6 max-w-7xl md:mt-22 mt-12 p-6 mx-auto w-full">
          <p className="hero-label text-sm tracking-[0.35em] font-medium uppercase text-gray-800 mb-5">
            Hubungi Kami
          </p>
          <h1 className="hero-title md:max-w-2xl text-4xl md:text-6xl font-bold leading-tight tracking-tight text-black">
           Mari Berkolaborasi Menuju Masa Depan Digital
          </h1>
          <p className="hero-desc mt-8 max-w-xl text-md md:text-xl text-gray-600 leading-relaxed text-justify">
         Kami hadir untuk mendampingi institusi dan perusahaan Anda dalam menghadirkan inovasi teknologi berbasis riset dan presisi akademik.
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">

        {/* Form */}
        <div className="form-card input-focus-ring bg-white border border-gray-300 rounded-xl p-10 min-h-[760px]">
          <h2 className="text-4xl font-semibold text-[#0F2747] mb-4">Kirim Pesan</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
         Tim ahli kami akan merespons permintaan Anda dalam waktu kurang dari 24 jam kerja.

          </p>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <InputText label='Nama Lengkap' placeholder="" />
            <InputText label='Alamat' placeholder="" />
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <InputText label='Nama Perusahaan / Institusi' placeholder="" />
            <InputText label='Keterangan / Subjek' placeholder="" />
          
          </div>

          <div className="mb-8">
            <label className="text-sm text-gray-600 block mb-2">Pesan</label>
            <textarea
              placeholder=""
              className="w-full h-40 rounded-md bg-[#f2f4fa] px-4 py-4 resize-none outline-none transition-shadow"
            />
          </div>

          <button className="btn-shine text-white px-10 py-4 rounded-md font-medium text-lg">
            Kirim Pesan
          </button>
        </div>

        {/* Info + Map */}
        <div className="space-y-8">
          <div className="info-card bg-[#05224B] rounded-xl p-10 text-white min-h-[420px] shadow-lg">
            <h3 className="text-3xl font-semibold mb-10">Ikuti Media Sosial Kami</h3>
            <div className="space-y-10">

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
             <div className="info-item-anim"><InfoItem  title="Instagram"  value="@eintio.id" icon={<FaInstagram />}  /></div>
               <div className="info-item-anim"><InfoItem  title="Threads" value="@eintio.id" icon={<FaThreads />} /></div> 
              <div className="info-item-anim"><InfoItem title="Facebook" value="eintioid" icon={<FaFacebook />}  /></div>
              <div className="info-item-anim"><InfoItem title="X (Twitter)" value="EintioTech" icon={<FaXTwitter />} /></div>
              
              <div className="info-item-anim"><InfoItem title="Tiktok" value="eintio.edu.tech " icon={<FaTiktok />} /></div>
             </div>
             </div>
             
          </div>

              <div className="map-card map-hover rounded-xl overflow-hidden shadow-md h-[290px] bg-orange-500 p-10">

                  <h3 className="text-3xl text-white font-semibold mb-10">Hubungi Kami</h3>
            <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 text-white">
                 <div className="info-item-anim"><InfoItem  title="Phone"  value="+6281122225804" icon={<FaPhone />}  /></div>
               <div className="info-item-anim"><InfoItem  title="Email" value="eintio.sosmed@gmail.com" icon={<MdEmail />} /></div> 
              </div>
            </div>
          </div>

        </div>

      </section>

  {/* CTA */}
<section className="w-full bg-[#f7f7f7] md:py-10 py-2 px-6">
  <div className="anim-fade-up relative max-w-7xl mx-auto bg-blue-950  py-12 px-12 rounded-xl shadow-xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
    
    {/* Konten kiri */}
    <div className="flex-1  md:text-left">
      <p className="text-sm tracking-widest mb-4 uppercase text-blue-300 mb-3 font-medium">
        Solusi Terbaik untuk Bisnis Anda
      </p>
      <h2 className="text-2xl  md:text-3xl mb-4 text-white max-w-lg font-bold leading-snug mb-3">
        Tingkatkan Pertumbuhan dengan Layanan Premium Kami
      </h2>
      <p className="text-gray-400 text-justify text-sm max-w-lg mx-auto md:mx-0 mb-6">
        Jangan biarkan peluang lewat begitu saja. Dengan dukungan tim ahli dan strategi yang terbukti, 
        bisnis Anda bisa berkembang lebih cepat, lebih aman, dan lebih menguntungkan. 
        Mulai sekarang dan rasakan perbedaannya!
      </p>

      {/* Button di bawah teks */}
      <div className="flex flex-col-1 sm:flex-row gap-3 justify-center md:justify-start">
        <Link href={'/layanan'} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-semibold rounded transition-colors">
          Lihat Layanan
        </Link>
        <Link href="https://wa.me/6281122225804" className="border border-white text-white px-6 py-3 text-sm font-semibold rounded hover:bg-white hover:text-blue-950 transition-colors">
          Konsultasi Gratis
        </Link>
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
