import { BookOpen, Code2, GraduationCap, Mic2, Star } from "lucide-react";
import Link from "next/link";
import useReveal from "../../../../hooks/useReveal";

const HeroSectionLayanan = () => {

    
  const { ref: heroRef, visible: heroVisible } = useReveal();

    return (
        <>
          {/* HERO */}
      <section
        ref={heroRef}
        className={`opacity-0 ${heroVisible ? "anim-fade-up delay-1" : ""} relative overflow-hidden bg-gray-100 py-28 px-6`}
      >
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text */}
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium">
              Layanan Pendidikan Profesional
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl text-gray-900 font-bold leading-tight">
              Solusi Akademik
              <span className="block text-orange-500">Modern & Terpercaya</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              Membantu mahasiswa, dosen, dan institusi pendidikan dalam konsultasi akademik,
              penulisan ilmiah, les coding, hingga penyediaan pembicara seminar profesional.
            </p>

          

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/kontak"
                className="px-7 py-4 rounded-2xl bg-biru-dark text-white font-semibold transition shadow-lg"
              >
                Konsultasi Sekarang
              </Link>
              <Link
                href="#layanan"
                className="px-7 py-4 rounded-2xl border border-gray-300 text-gray-700 hover:bg-white transition"
              >
                Pelajari Layanan
              </Link>
            </div>
          </div>

          {/* RIGHT: Service Cards */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-5 rounded-full bg-orange-500" />
              <span className="text-gray-500 text-xs uppercase tracking-widest font-medium">Cakupan Layanan</span>
            </div>

            {/* Akademik cards */}
            {[
              {  title: "Konsultasi Skripsi / Tesis / Disertasi", desc: "Bimbingan dari proposal hingga sidang akhir secara sistematis.", icon: GraduationCap, iconBg: "bg-blue-100 text-blue-700" },
              {  title: "Konsultasi Paper di Publikasi Jurnal", desc: "Pendampingan penulisan artikel jurnal nasional & internasional.", icon: BookOpen, iconBg: "bg-orange-100 text-orange-600" },
              {  title: "Seminar / Webinar / Rapat Kerja", desc: "Narasumber profesional di bidangnya untuk berbagai kegiatan.", icon: Mic2, iconBg: "bg-blue-100 text-blue-700" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${item.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-orange-500 font-semibold uppercase tracking-wider mb-0.5">Akademik </div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug">{item.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Les Coding card — highlighted */}
            <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="p-3 rounded-xl flex-shrink-0 bg-orange-100 text-orange-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-0.5">Teknologi</div>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug">Les Coding & Pemrograman</h3>
                <p className="text-gray-400 text-xs mt-1">Belajar coding dari dasar hingga mahir bersama instruktur berpengalaman.</p>
              </div>
             
            </div>
          </div>

        </div>
      </section>

        </>
    )
}

export default HeroSectionLayanan;