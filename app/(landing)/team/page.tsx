'use client';

import Link from "next/link";
import teamsAll from "../../lib/allTeam";
import useReveal from "../../hooks/useReveal";

export default function ProfessionalTeamSection() {
  
    const { teams, leadership } = teamsAll();

    
  const { ref: SectionLeaderRef, visible: SectionLeaderVisible } = useReveal();
  return (
    <>
    <section 
     ref={SectionLeaderRef}
    className="relative overflow-hidden bg-gray-100 py-32 px-6">

      <div className={`opacity-0 ${SectionLeaderVisible ? 'anim-fade-up delay-1' : ''}  relative max-w-7xl mx-auto`}>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full  px-5 py-2 text-sm font-medium">
            Professional Team
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Struktur Tim &
            <span className="bg-orange-500 bg-clip-text text-transparent">
              {" "}
              Organisasi Profesional
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Tim kami terdiri dari profesional berpengalaman di bidang
            akademik, teknologi, pengembangan aplikasi, dan corporate
            management untuk memberikan layanan terbaik.
          </p>
        </div>

        {/* Leadership */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {leadership.map((leader, index) => {
            const Icon = leader.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/5 to-orange-500/10" />

                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-orange-600 text-white shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {leader.name}
                  </h3>

                  <p className="mt-2 text-gray-500 font-medium">
                    {leader.role}
                  </p>

                  <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-orange-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Division */}
        <div className="mt-24">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Divisi Perusahaan
              </h3>

              <p className="mt-2 text-gray-500">
                Kolaborasi lintas divisi untuk mendukung inovasi dan
                perkembangan perusahaan.
              </p>
            </div>

          </div>

          {/* Team Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {teams.map((team, index) => {
              const Icon = team.icon;

              return (
                <div
                  key={index}
                  className="group relative rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/5 to-orange-500/10 rounded-3xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-2xl bg-orange-600 text-white shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h4 className="mt-6 text-2xl font-bold text-gray-900">
                      {team.title}
                    </h4>

                    {/* Members */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {team.members.map((member, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-700 transition"
                        >
                          {member}
                        </div>
                      ))}
                    </div>

                    {/* Bottom Line */}
                    <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-orange-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
          </section>

<section>
        {/* CTA */}
        <div className="">
          <div className="relative overflow-hidden bg-orange-600 px-10 py-16 text-center shadow-2xl">
            

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Tim Profesional
                <span className="block">
                  Untuk Solusi Modern
                </span>
              </h3>

              <p className="mt-6 text-md text-blue-100 max-w-2xl mx-auto leading-relaxed mb-12">
                Kami membangun budaya kerja yang kolaboratif,
                inovatif, dan profesional untuk menghadirkan layanan
                terbaik bagi klien dan partner perusahaan.
              </p>

              <Link 
                href="https://wa.me/6281122225804"
              className="mt-32 px-8 py-4 rounded-2xl bg-white text-orange-700 font-semibold hover:bg-gray-100 transition shadow-lg">
                Hubungi Tim Kami
              </Link>
            </div>
          </div>
        </div>
  </section>
  </>
  );
}