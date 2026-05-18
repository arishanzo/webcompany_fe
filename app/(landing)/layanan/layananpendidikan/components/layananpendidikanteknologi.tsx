import { ArrowRight, CheckCircle2, Code2 } from "lucide-react"
import Link from "next/link"
import ServicesTeknologiPendidikan from "../../../../lib/servicesPendidikanTeknologi"
import useReveal from "../../../../hooks/useReveal";

const LayananPendidikanTeknologi = () => {


   const { teknologiHighlights } =  ServicesTeknologiPendidikan();
   
  const { ref: teknologiRef, visible: teknologiVisible } = useReveal();
   

    return (

        <>

        
      {/* LAYANAN PENDIDIKAN TEKNOLOGI */}
      <section
        ref={teknologiRef}
        className={`opacity-0 ${teknologiVisible ? "anim-fade-left delay-1" : ""} py-28 px-6 bg-gray-200`}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
                        <span className="text-[#001F3F] font-semibold text-sm uppercase tracking-widest">Layanan Pendidikan Teknologi</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Les Coding &
              <span className="block text-orange-500">Pemrograman</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Program les coding dan pemrograman untuk pemula hingga tingkat lanjut.
              Dipandu oleh instruktur berpengalaman dengan kurikulum praktis dan
              berbasis proyek nyata.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {teknologiHighlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="https://wa.me/6281122225804"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#001F3F] text-white font-semibold hover:bg-[#002a57] transition shadow-lg"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Pemula", desc: "Mulai dari nol, belajar dasar-dasar coding", color: "border-blue-200 bg-white text-blue-700", iconColor: "bg-blue-100 text-blue-700" },
              { label: "Menengah", desc: "Framework modern & best practices", color: "border-orange-200 bg-white text-orange-600", iconColor: "bg-orange-100 text-orange-600" },
              { label: "Lanjutan", desc: "Proyek nyata & portfolio profesional", color: "border-blue-200 bg-white text-blue-700", iconColor: "bg-blue-100 text-blue-700" },
              { label: "Privat / Grup", desc: "Sesi fleksibel sesuai kebutuhan", color: "border-orange-200 bg-white text-orange-600", iconColor: "bg-orange-100 text-orange-600" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${item.color}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.iconColor}`}>
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className={`font-semibold mb-1 text-gray-900`}>{item.label}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        
        </>
    )
}

export default LayananPendidikanTeknologi;