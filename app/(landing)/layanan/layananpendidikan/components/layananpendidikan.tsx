import { ArrowRight } from "lucide-react";
import Link from "next/link";
import akademikServices from "../../../../lib/akademikServices";
import useReveal from "../../../../hooks/useReveal";

const LayananPendidikan = () => {


  const { ref: akademikRef, visible: akademikVisible } = useReveal();
  
    return (

        <>
        
      {/* LAYANAN AKADEMIK */}
      <section
        id="layanan"
        ref={akademikRef}
        className={`opacity-0 ${akademikVisible ? "anim-fade-up delay-1" : ""} py-28 px-6`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#001F3F] font-semibold text-sm uppercase tracking-widest">Layanan Akademik</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pendampingan <span className="text-orange-500">Akademik</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed mb-14">
            Kami hadir untuk membantu kebutuhan akademik dan profesional Anda dengan
            layanan terpercaya dan berkualitas tinggi.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {akademikServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center gap-3 mb-6">
                  
                    <div className={`p-3 rounded-2xl ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-500 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <Link
                    href="https://wa.me/6281122225804"
                    className="mt-6 inline-flex items-center gap-2 text-[#001F3F] font-semibold hover:text-orange-500 transition text-sm"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
        </>
    )
}

export default LayananPendidikan;