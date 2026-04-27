'use client';

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const allArtikel = [
  { id: 1, img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=600", date: "08 Mei 2024", category: "Teknologi", title: "Evolusi UI/UX dalam Aplikasi Enterprise 2024", desc: "Menjelajahi pergeseran paradigma desain dari fungsionalitas menuju pengalaman pengguna." },
  { id: 2, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600", date: "15 Mei 2024", category: "Akademik", title: "Transformasi Kurikulum di Era Digital", desc: "Bagaimana institusi pendidikan mengadopsi teknologi untuk meningkatkan kualitas belajar." },
  { id: 3, img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600", date: "22 Mei 2024", category: "Desain Kreatif", title: "Tren Desain Grafis yang Mendominasi 2024", desc: "Eksplorasi gaya visual terbaru yang mempengaruhi industri kreatif global." },
  { id: 4, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600", date: "01 Jun 2024", category: "Teknologi", title: "Cloud Computing untuk Bisnis Skala Menengah", desc: "Strategi adopsi cloud yang efisien dan aman untuk perusahaan berkembang." },
  { id: 5, img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600", date: "10 Jun 2024", category: "Event", title: "Recap: Tech Summit Indonesia 2024", desc: "Sorotan dari konferensi teknologi terbesar tahun ini di Jakarta." },
  { id: 6, img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=600", date: "18 Jun 2024", category: "Teknologi", title: "AI Generatif dan Masa Depan Pekerjaan", desc: "Analisis dampak kecerdasan buatan terhadap lanskap karier profesional." },
];

const CATEGORIES = ["Semua", "Teknologi", "Akademik", "Desain Kreatif", "Event"];

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('anim-visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Berita = () => {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [search, setSearch] = useState("");
    const [current, setCurrent] = useState(0);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const filtered = useMemo(() =>
        allArtikel.filter((a) => {
            const matchCat = activeCategory === "Semua" || a.category === activeCategory;
            const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase());
            return matchCat && matchSearch;
        }), [activeCategory, search]);

    const looped = [...filtered, ...filtered];
    const total = filtered.length;

    const startAuto = () => {
        autoRef.current = setInterval(() => setCurrent((p) => (p + 1) % total), 3000);
    };

    useEffect(() => {
        if (total > 0) {
            setCurrent(0);
            if (autoRef.current) clearInterval(autoRef.current);
            startAuto();
        }
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [filtered.length]);

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

    const carouselRef = useFadeUp();
    const newsletterRef = useFadeUp();

    return (
        <>
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroLeft {
            from { opacity: 0; transform: translateX(-24px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes heroRight {
            from { opacity: 0; transform: translateX(24px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          .anim-fade-up { opacity: 0; transform: translateY(28px); }
          .anim-visible { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards; }
          .hero-left  { animation: heroLeft  0.7s 0.1s ease both; }
          .hero-right { animation: heroRight 0.7s 0.3s ease both; }
          .hero-sub   { animation: fadeUp    0.6s 0.2s ease both; }
          .hero-desc  { animation: fadeUp    0.6s 0.35s ease both; }
          .hero-btn   { animation: fadeUp    0.6s 0.5s ease both; }
          .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .card-hover:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,0.1); }
          .img-zoom { overflow: hidden; }
          .img-zoom img { transition: transform 0.5s ease; }
          .img-zoom:hover img { transform: scale(1.07); }
          .cat-pill { transition: color 0.2s, border-bottom 0.2s; }
          .cat-pill:hover { color: #ea580c; }
          .btn-shine {
            background: linear-gradient(90deg, #ea580c 40%, #fb923c 50%, #ea580c 60%);
            background-size: 200% auto;
            transition: background-position 0.4s ease, transform 0.2s ease;
          }
          .btn-shine:hover { background-position: right center; transform: scale(1.03); }
        `}</style>

        <div className="text-gray-800 bg-white max-w-7xl mx-auto">

          {/* HERO */}
          <section className="px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="hero-sub text-xs tracking-widest text-gray-400 mb-4">
                BERITA & WAWASAN TERBARU
              </p>
              <h1 className="hero-left text-4xl font-bold leading-tight mb-4">
                Transformasi Digital di Sektor Pendidikan Indonesia
              </h1>
              <p className="hero-desc text-gray-500 mb-6 max-w-md">
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
          <section className="px-6 py-6 flex justify-between items-center">
            <div className="flex gap-6 text-sm">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cat-pill cursor-pointer pb-1 ${activeCategory === cat ? "text-orange-600 font-semibold border-b-2 border-orange-600" : "text-gray-500"}`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="flex items-center border border-gray-200 px-3 py-2 rounded-md text-sm text-gray-500 focus-within:border-orange-400 transition-colors">
              <Search size={16} className="mr-2 shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari artikel..."
                className="outline-none bg-transparent w-40"
              />
            </div>
          </section>

          <hr className="text-gray-200" />

          {/* CAROUSEL ARTIKEL */}
          <section className="px-6 py-12">
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
                    style={{ transform: `translateX(calc(-${current * (100 / 3)}% - ${current * (32 / 3)}px))` }}
                  >
                    {looped.map((item, idx) => (
                      <div key={idx} className="card-hover border border-gray-200 rounded-lg overflow-hidden flex-shrink-0 w-[calc(33.333%-22px)]">
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
          <section ref={newsletterRef} className="anim-fade-up mx-6 mb-20 bg-orange-600 text-white p-12 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Tetap Terinformasi</h2>
              <p className="text-orange-100 mb-4 max-w-md">
                Dapatkan wawasan eksklusif, pengumuman workshop, dan berita teknologi terbaru langsung ke inbox Anda.
              </p>
              <div className="flex gap-4">
                <input
                  placeholder="Alamat email Anda"
                  className="px-4 py-3 rounded w-64 bg-orange-500 text-white placeholder-orange-200 outline-none focus:ring-2 focus:ring-white transition-all"
                />
                <button className="bg-white text-orange-600 font-semibold cursor-pointer px-6 py-3 rounded hover:bg-orange-50 transition-colors">
                  BERLANGGANAN
                </button>
              </div>
            </div>
            <div className="text-6xl opacity-20">✉️</div>
          </section>

        </div>
        </>
    )
}

export default Berita;
