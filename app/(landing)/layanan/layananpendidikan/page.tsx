'use client';

import {
  BookOpen,
  GraduationCap,
  Mic2,
  ArrowRight,
} from "lucide-react";
import ServicesPendidikan from "../../../lib/servicesPendidikan";
import useReveal from "../../../hooks/useReveal";


const LayananPendidikanSection = () => {

    
  const { ref: heroSectionRef, visible: heroSectionVisible } = useReveal();
   const { ref: layananSectionRef, visible: layananSectionVisible } = useReveal();

  return (
      <div ref={heroSectionRef} className="bg-gray-100 text-gray-900 overflow-hidden">
      {/* HERO SECTION */}
      <section className={`opacity-0 ${heroSectionVisible? 'anim-fade-up  delay-1' : ''} relative overflow-hidden bg-gray-200 py-32 px-6`}>
        {/* Blur */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center text-gray-700 rounded-full py-1 text-sm ">
              Layanan Pendidikan Profesional
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl text-gray-700 font-bold leading-tight">
              Solusi Akademik
              <span className="block text-orange-500">
                Modern & Terpercaya
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              Membantu mahasiswa, dosen, dan institusi pendidikan dalam
              konsultasi akademik, penulisan ilmiah, hingga penyediaan
              pembicara seminar profesional.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-7 bg-biru-dark py-4 rounded-2xl bg-white text-gray-100 font-semibold hover:bg-gray-100 transition">
                Konsultasi Sekarang
              </button>

              <button className="px-7 py-4 rounded-2xl border border-gray-800 text-gray-800 hover:bg-white/10 transition">
                Pelajari Layanan
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="rounded-2xl bg-white p-5 flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-blue-100 text-blue-700">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Artikel Ilmiah
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Pendampingan jurnal nasional & internasional
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-5 flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-orange-100 text-orange-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Skripsi & Thesis
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Konsultasi akademik profesional
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-5 flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-blue-100 text-blue-700">
                    <Mic2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Seminar Profesional
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Pembicara berpengalaman & inspiratif
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
       ref={layananSectionRef}
       className={`opacity-0 ${layananSectionVisible? 'anim-fade-left delay-1' : ''}  max-w-7xl mx-auto px-6  py-28`}>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-start mb-16">
            <span className="inline-flex items-center rounded-full py-1 text-sm font-medium">
              Layanan Kami
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              Pendampingan Akademik
            </h2>

            <p className="mt-5 text-gray-500 max-w-2xl text-lg leading-relaxed">
              Kami hadir untuk membantu kebutuhan akademik dan profesional
              Anda dengan layanan terpercaya dan berkualitas tinggi.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ServicesPendidikan.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-orange-500 text-white shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-500 leading-relaxed">
                    {service.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-orange-500 transition">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="max-w-full mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-700 px-10 py-16 md:px-20 text-center shadow-2xl">
            {/* Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Siap Meningkatkan
                <span className="block">
                  Kualitas Akademik Anda?
                </span>
              </h2>

              <p className="mt-6 text-gray-300 md:text-xl text-md max-w-2xl mx-auto leading-relaxed">
                Dapatkan konsultasi dan pendampingan profesional untuk
                mendukung keberhasilan akademik dan kegiatan seminar Anda.
              </p>

              <button className="mt-10 px-8 py-4 rounded-2xl bg-white text-orange-500 font-semibold hover:bg-gray-100 transition shadow-lg">
                Hubungi Kami Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LayananPendidikanSection;