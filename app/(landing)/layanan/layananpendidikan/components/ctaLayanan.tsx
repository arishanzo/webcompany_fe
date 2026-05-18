import { ArrowRight } from "lucide-react"
import Link from "next/link"

const CTALayanan = () => {

    return(

        <>
      {/* CTA */}
      <section>
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-700 px-10 py-20 md:px-20 text-center">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Siap Meningkatkan
              <span className="block">Kualitas Akademik Anda?</span>
            </h2>
            <p className="mt-5 text-orange-100 md:text-lg max-w-2xl mx-auto leading-relaxed">
              Dapatkan konsultasi dan pendampingan profesional untuk mendukung
              keberhasilan akademik dan kegiatan seminar Anda.
            </p>
            <Link
              href="https://wa.me/6281122225804"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-orange-600 font-semibold hover:bg-gray-100 transition shadow-xl"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
        </>
    )
}

export default CTALayanan;