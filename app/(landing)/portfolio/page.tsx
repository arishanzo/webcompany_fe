'use client';

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useCountUp from "../../hooks/useCountUp";
import allProjects from "../../lib/allProjects";
import { useFadeUp } from "../../hooks/useFadeUp";


const Portfolio = () => {
    const projects = useCountUp(15);
    const client = useCountUp(100);
    const [current, setCurrent] = useState(0);
    const total = allProjects.length;
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAuto = () => {
        autoRef.current = setInterval(() => setCurrent((p) => (p + 1) % total), 3000);
    };

    useEffect(() => {
        startAuto();
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, []);

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

    const looped = [...allProjects, ...allProjects];

    const statsRef = useFadeUp();
    const showcaseRef = useFadeUp();
    const testiRef = useFadeUp();

    return (
        <>
      

        {/* STATS */}
        <section className="text-center md:py-24 mt-24 mb-8">
          <div ref={statsRef} className="anim-fade-up grid grid-cols-3 max-w-5xl p-8 mx-auto">
            {["PROJECTS COMPLETED", "CLIENT GLOBAL", "INSTRUKTUR BERPENGALAMAN"].map((t, i) => (
              <div key={i} className={`stat-pop stat-pop-${i + 1}`}>
                <h2 className="md:text-5xl text-3xl font-bold text-orange-600">{i === 2 ? `${projects}+` : `${client}+`}</h2>
                <p className="text-xs tracking-[0.3em] mt-3 text-gray-500">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SHOWCASE */}
        <section className="bg-gray-100 py-16">
          <div ref={showcaseRef} className="anim-fade-up">
            <div className="flex justify-between max-w-7xl mx-auto px-6 items-start mb-10">
              <div>
                <h3 className="text-base font-semibold mb-2">Lihat Proyek</h3>
                <p className="text-gray-500 max-w-xl">
                  Eksplorasi karya-karya unggulan kami yang menggabungkan estetika modern dengan fungsionalitas teknis tingkat tinggi.
                </p>
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="bg-gray-300 hover:bg-gray-400 p-2 rounded cursor-pointer transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="bg-gray-300 hover:bg-gray-400 p-2 rounded cursor-pointer transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden max-w-7xl mx-auto px-6">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(calc(-${current * (100 / 3)}% - ${current * (24 / 3)}px))` }}
              >
                {looped.map((item, idx) => (
                  <div key={idx} className="card-hover bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-shrink-0 w-[calc(33.333%-16px)]">
                    <div className="img-zoom">
                      <Image
                        src={item.img}
                        alt="project"
                        width={600}
                        height={400}
                        unoptimized
                        className="w-full h-52 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[10px] bg-gray-200 px-2 py-1 rounded">{tag}</span>
                        ))}
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      <button className="btn-orange text-orange-600 cursor-pointer hover:bg-orange-600 p-2 rounded hover:text-white text-xs mt-4 font-medium">
                        DETAIL PROYEK →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {allProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (autoRef.current) clearInterval(autoRef.current); setCurrent(i); startAuto(); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current % total ? 'bg-gray-700 w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="py-20 px-16 max-w-7xl mx-auto">
          <div ref={testiRef} className="anim-fade-up">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Apa Kata Mereka?</h2>
              <a className="text-blue-600 text-sm cursor-pointer hover:underline">Lihat Semua →</a>
            </div>

            <div className="grid md:grid-cols-2 gap-2">
              <div>
                <Quote className="md:h-82 md:w-82 h-32 w-32 text-gray-200 mb-4" />
              </div>
              <div className="testi-visible">
                {[
                  { name: "Bimosaurus", role: "Graphic Designer" },
                  { name: "Crystal Maiden", role: "UIUX Designer" },
                  { name: "Roshan Pro Max", role: "UIUX Designer" },
                  { name: "Mirana Marci", role: "3D Designer" },
                ].map((user, i) => (
                  <div key={i} className="testi-item flex gap-5 items-start py-4 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 1}`}
                      alt="avatar"
                      width={56}
                      height={56}
                      unoptimized
                      className="rounded-full flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">{user.name}</h4>
                      <p className="text-xs text-gray-400 mb-2">{user.role}</p>
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={14} className="text-orange-500 fill-orange-500" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                        The quality of the design is top-notch, and I love how organized the files are. Its easy to find what I need.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Portfolio;
