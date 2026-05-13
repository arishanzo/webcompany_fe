'use client'

import Link from "next/link";
import { useState } from "react";
import useReveal from "../../../hooks/useReveal";
import { CheckCircle2, ChevronRight } from "lucide-react";
import ServicesTeknologiPendidikan from "../../../lib/servicesPendidikanTeknologi";



const LayananPendidikanTeknologi = () => {
    
  const [heroVisible, setHeroVisible] = useState(false);
  const { ref: heroSectionRef, visible: heroSectionVisible } = useReveal();
  const { ref: layananSectionRef, visible: layananSectionVisible } = useReveal();
  
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  return (
    <section className="min-h-screen bg-gray-100 overflow-hidden">
      
      {/* HERO */}
      <div ref={heroSectionRef} className="max-w-7xl mx-auto px-6 py-32">
        <div className={`opacity-0 ${heroSectionVisible? 'anim-fade-up  delay-1' : ''} grid lg:grid-cols-2 gap-14 items-center `}>
          
          {/* LEFT */}
          <div>
            <span className="inline-block  text-sm font-semibold  py-2 rounded-full mb-5">
             Layanan Pendidikan Teknologi
            </span>

            <h1 className="text-3xl lg:text-5xl font-black leading-tight text-gray-900">
              Belajar Teknologi &
              <span className="text-transparent bg-clip-text bg-orange-500">
                {" "}Coding Modern
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6">
              Program pendidikan teknologi modern untuk siswa, mahasiswa,
              UMKM, sekolah, dan masyarakat umum agar siap menghadapi
              era digital.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/kontak"
                className="bg-biru-dark hover:scale-105 transition-all duration-300 text-white px-7 py-4 rounded-2xl font-semibold shadow-lg"
              >
                Konsultasi Sekarang
              </Link>

              <Link
                href="#layanan"
                className="border border-orange-300 hover:border-orange-600 transition-all duration-300 text-orange-700 px-7 py-4 rounded-2xl font-semibold"
              >
                Lihat Layanan
              </Link>
            </div>

            {/* FEATURE */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                "Mentor Profesional",
                "Kurikulum Modern",
                "Project Real",
                "Sertifikat Pelatihan",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-gray-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            

            {/* CARD */}
            <div className="relative bg-white border border-gray-200  rounded-[32px] p-8">
              
              <div className="grid grid-cols-2 gap-5">
                {ServicesTeknologiPendidikan.slice(0, 4).map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="group bg-gray-50 border border-orange-100 rounded-3xl p-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-700 to-orange-500 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-2">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section
        ref={layananSectionRef}
        id="layanan"
        className={`opacity-0 ${layananSectionVisible? 'anim-fade-left delay-1' : ''}  max-w-7xl mx-auto px-6 pb-24`}
      >
        <div className={`text-start mb-14`}>
          <span className="text-gray-700 font-semibold uppercase tracking-widest text-sm">
            • Program Kami
          </span>

          <h2 className="text-4xl font-black mt-3 text-gray-900">
            Layanan Pendidikan Teknologi
          </h2>

          <p className="text-gray-600 max-w-2xl mt-4">
            Berbagai program pembelajaran teknologi modern yang dirancang
            interaktif, praktis, dan sesuai kebutuhan industri digital.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ServicesTeknologiPendidikan.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative bg-white rounded-[28px] p-7 border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* HOVER */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-700 to-orange-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">
                    {item.desc}
                  </p>

                  <Link
                    href="https://wa.me/6281122225804"
                    className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:gap-3 transition-all"
                  >
                    Konsultasi Sekarang
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>




<section className="w-full bg-orange-600 bg-gray-200 py-16 bottom-0 p-8">
  <div
    ref={ctaRef}
    className={`mx-auto text-center py-12 px-6 rounded-sm opacity-0 ${
      ctaVisible ? 'anim-scale-in delay-1' : ''
    }`}
  >
    <h2 className="text-white text-2xl md:text-3xl font-semibold">
      Tingkatkan Skill Teknologi &
          Coding Bersama Kami
    </h2>
    <p className="text-orange-100 text-sm mt-3 max-w-2xl mx-auto">
        Belajar teknologi digital, coding, AI, website, dan keterampilan
          modern lainnya dengan metode pembelajaran interaktif dan mentor
          profesional.
    </p>
    <div className="mt-6 flex justify-center gap-4">
      <Link href={'/kontak'} className="bg-white text-orange-600 px-5 py-2 text-sm font-semibold rounded hover:bg-orange-50 transition-colors">
        Konsultasi Gratis
      </Link>
      <Link
         href="https://wa.me/6281122225804"
        className="border border-white cursor-pointer text-white px-5 py-2 text-sm font-semibold rounded hover:bg-white hover:text-orange-600 transition"
      >
        Hubungi WhatsApp
      </Link>
    </div>
  </div>
</section>



    </section>
  );
};

export default LayananPendidikanTeknologi;