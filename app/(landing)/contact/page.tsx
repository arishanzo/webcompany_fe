'use client';

import Image from "next/image";
import InfoItem from "./infoItem";
import InputText from "../ui/inputtext";

const Contact = () => {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
  const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=800&height=400&center=lonlat:110.5076,-7.3319&zoom=12&apiKey=${apiKey}`;

  return (
    <>
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideLeft {
        from { opacity: 0; transform: translateX(-32px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideRight {
        from { opacity: 0; transform: translateX(32px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      .hero-label { animation: fadeUp   0.6s 0.1s ease both; }
      .hero-title { animation: fadeUp   0.7s 0.25s ease both; }
      .hero-desc  { animation: fadeUp   0.6s 0.4s ease both; }
      .form-card  { animation: slideLeft  0.7s 0.2s cubic-bezier(.22,1,.36,1) both; }
      .info-card  { animation: slideRight 0.7s 0.35s cubic-bezier(.22,1,.36,1) both; }
      .map-card   { animation: slideRight 0.7s 0.5s cubic-bezier(.22,1,.36,1) both; }
      .info-item-anim { opacity: 0; transform: translateY(12px); animation: fadeUp 0.5s ease both; }
      .info-item-anim:nth-child(1) { animation-delay: 0.5s; }
      .info-item-anim:nth-child(2) { animation-delay: 0.65s; }
      .info-item-anim:nth-child(3) { animation-delay: 0.8s; }
      .btn-shine {
        background: linear-gradient(90deg, #f97316 40%, #fb923c 50%, #f97316 60%);
        background-size: 200% auto;
        transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
      }
      .btn-shine:hover {
        background-position: right center;
        transform: scale(1.03);
        box-shadow: 0 8px 24px rgba(249,115,22,0.35);
      }
      .input-focus-ring input:focus,
      .input-focus-ring textarea:focus,
      .input-focus-ring select:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(249,115,22,0.3);
      }
      .map-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      .map-hover:hover { transform: scale(1.01); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
    `}</style>

    <div className="w-full min-h-screen bg-[#f7f7f7] text-[#111] font-sans">

      {/* Hero */}
      <section
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="hero-label text-sm tracking-[0.35em] font-medium uppercase text-gray-800 mb-5">
            Hubungi Kami
          </p>
          <h1 className="hero-title max-w-4xl text-5xl md:text-6xl font-bold leading-tight tracking-tight text-black">
            Mari Berkolaborasi Menuju
            <br />
            Masa Depan Digital
          </h1>
          <p className="hero-desc mt-8 max-w-3xl text-xl text-gray-600 leading-relaxed">
            Kami hadir untuk mendampingi institusi dan perusahaan Anda dalam
            menghadirkan inovasi teknologi berbasis riset dan presisi akademik.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">

        {/* Form */}
        <div className="form-card input-focus-ring bg-white border border-gray-300 rounded-xl p-10 min-h-[760px]">
          <h2 className="text-4xl font-semibold text-[#0F2747] mb-4">Kirim Pesan</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
            Tim ahli kami akan merespons permintaan Anda dalam waktu kurang dari 24 jam kerja.
          </p>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <InputText label="NAMA LENGKAP" placeholder="Contoh: Budi Santoso" />
            <InputText label="ALAMAT EMAIL" placeholder="budi@institusi.ac.id" />
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <InputText label="INSTITUSI / PERUSAHAAN" placeholder="Universitas atau Nama PT" />
            <div>
              <label className="text-sm text-gray-600 block mb-2">SUBJEK</label>
              <select className="w-full h-14 rounded-md bg-[#f2f4fa] px-4 text-gray-700 outline-none border-none transition-shadow">
                <option>Kerjasama Riset</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm text-gray-600 block mb-2">PESAN ANDA</label>
            <textarea
              placeholder="Bagaimana kami dapat membantu Anda?"
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
            <h3 className="text-3xl font-semibold mb-10">Informasi Kontak</h3>
            <div className="space-y-10">
              <div className="info-item-anim"><InfoItem title="EMAIL" value="contact@eintio.id" icon="✉" /></div>
              <div className="info-item-anim"><InfoItem title="TELEPON" value="62 81122 225 804" icon="☎" /></div>
              <div className="info-item-anim"><InfoItem title="KANTOR PUSAT" value="Jln. Menjangan No.25A, Salatiga, Jawa Tengah" icon="📍" /></div>
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
