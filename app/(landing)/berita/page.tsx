'use client';

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFadeUp } from "../../hooks/useFadeUp";
import allArtikel from "../../lib/allArtikel";


const CATEGORIES = ["Semua", "Teknologi", "Akademik", "Desain Kreatif", "Event"];

const Berita = () => {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [search, setSearch] = useState("");
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const cols = isMobile ? 1 : 3;

    const filtered = useMemo(() =>
        allArtikel.filter((a) => {
            const matchCat = activeCategory === "Semua" || a.category === activeCategory;
            const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase());
            return matchCat && matchSearch;
        }), [activeCategory, search]);

    const looped = [...filtered, ...filtered];
    const total = filtered.length;

    const startAuto = () => {
        if (total > 0) {
            autoRef.current = setInterval(() => setCurrent((p) => (p + 1) % total), 3000);
        }
    };

    useEffect(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        if (total > 0) {
            startAuto();
        }
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [total]);

    const prev = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        setCurrent((p) => (p - 1 + total) % total);
        startAuto();
    };

    const next = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        setCurrent((p) => (p + 1) % total);
        startAuto();
    };

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const carouselRef = useFadeUp();
    const newsletterRef = useFadeUp();

    return (
        <>

        <div className="text-gray-800 bg-gray-100">

          {/* HERO */}
          <section className="px-6 py-24 md:py-32  max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="hero-sub text-xs tracking-widest text-gray-400 mb-4">
                BERITA & WAWASAN TERBARU
              </p>
              <h1 className="hero-left text-4xl font-bold leading-tight mb-4">
                Transformasi Digital di Sektor Pendidikan Indonesia
              </h1>
              <p className="hero-desc text-gray-500 mb-6 max-w-md text-justify">
                Mengkaji bagaimana teknologi informasi mendefinisikan ulang standar akademis dan metodologi pengajaran di era industri 4.0.
              </p>
              <div className="hero-btn">
                <button className="btn-shine bg-orange-600 text-white px-6 py-3 rounded flex items-center gap-2">
                  Baca Selengkapnya →
                </button>
              </div>
            </div>

            <div className="hero-right img-zoom rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000"
                alt="hero"
                width={600}
                height={400}
                unoptimized
                className="rounded-lg w-full"
              />
            </div>
          </section>

          {/* FILTER */}
          <section className="px-6 py-6 max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div className="flex gap-4 text-sm overflow-x-auto pb-1 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cat-pill cursor-pointer pb-1 whitespace-nowrap flex-shrink-0 ${activeCategory === cat ? "text-orange-600 font-semibold border-b-2 border-orange-600" : "text-gray-500"}`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="flex items-center border border-gray-200 px-3 py-2 rounded-md text-sm text-gray-500 focus-within:border-orange-400 transition-colors w-full md:w-auto">
              <Search size={16} className="mr-2 shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari artikel..."
                className="outline-none bg-transparent w-full md:w-40"
              />
            </div>
          </section>

          <hr className="text-gray-200" />

          {/* CAROUSEL ARTIKEL */}
          <section className="px-6 py-12  max-w-7xl mx-auto">
            {total === 0 ? (
              <p className="text-center text-gray-400 py-16">Tidak ada artikel ditemukan.</p>
            ) : (
              <div ref={carouselRef} className="anim-fade-up">
                <div className="flex justify-end gap-2 mb-6">
                  <button onClick={prev} className="bg-gray-200 hover:bg-gray-300 p-2 rounded cursor-pointer transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={next} className="bg-gray-200 hover:bg-gray-300 p-2 rounded cursor-pointer transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="overflow-hidden">
                  <div
                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(calc(-${current * (100 / cols)}% - ${current * (32 / cols)}px))` }}
                  >
                    {looped.map((item, idx) => (
                      <div key={idx} className={`card-hover border border-gray-200 rounded-lg overflow-hidden flex-shrink-0 ${isMobile ? 'w-full' : 'w-[calc(33.333%-22px)]'}`}>
                        <div className="img-zoom">
                          <Image
                            src={item.img}
                            alt="artikel"
                            width={600}
                            height={400}
                            unoptimized
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded font-medium">{item.category}</span>
                            <p className="text-xs text-gray-400">{item.date}</p>
                          </div>
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                          <button className="text-orange-600 text-sm font-medium hover:underline transition-all">BACA BERITA →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { if (autoRef.current) clearInterval(autoRef.current); setCurrent(i); startAuto(); }}
                      className={`h-2 rounded-full transition-all duration-300 ${i === current % total ? 'bg-gray-700 w-4' : 'bg-gray-300 w-2'}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>

         {/* NEWSLETTER */}
         <div className="p-2">
<section
  ref={newsletterRef}
  className="anim-fade-up max-w-7xl mx-auto mb-20 bg-orange-600 text-white rounded-lg p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
>
  {/* Konten kiri */}
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-2xl font-bold mb-2">Tetap Terinformasi</h2>
    <p className="text-orange-100 mb-4 max-w-md mx-auto md:mx-0">
      Dapatkan wawasan eksklusif, pengumuman workshop, dan berita teknologi terbaru langsung ke inbox Anda.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <input
        placeholder="Alamat email Anda"
        className="px-4 py-3 rounded w-full sm:w-64 bg-orange-500 text-white placeholder-orange-200 outline-none focus:ring-2 focus:ring-white transition-all"
      />
      <button className="bg-white text-orange-600 font-semibold cursor-pointer px-6 py-3 rounded hover:bg-orange-50 transition-colors">
        BERLANGGANAN
      </button>
    </div>
  </div>

  {/* Icon kanan */}
  <div className="text-6xl opacity-20 mt-6 md:mt-0">
    ✉️
  </div>
</section>
</div>

        </div>
        </>
    )
}

export default Berita;
