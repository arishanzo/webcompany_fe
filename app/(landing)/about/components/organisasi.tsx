'use client';

import teamsAll from "../../../lib/allTeam";
import useReveal from "../../../hooks/useReveal";

export default function OrganiasiSection() {
  
    const { teams, leadership } = teamsAll();

    
  const { ref: SectionLeaderRef, visible: SectionLeaderVisible } = useReveal();
  return (
    <>
 <section 
  ref={SectionLeaderRef}
  className="relative overflow-hidden bg-gray-100 mb-28 px-6"
>
  <div className={`opacity-0 ${SectionLeaderVisible ? 'anim-fade-up delay-1' : ''} relative max-w-7xl mx-auto`}>

    {/* Heading */}
    <div className="text-left max-w-3xl">
      <span className="inline-flex items-center rounded-full  py-2 text-sm font-medium">
        Organisasi Perusahaan
      </span>
<h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight whitespace-nowrap">
  Struktur <span className="bg-orange-500 px-1 bg-clip-text text-transparent">
    Organisasi Profesional
  </span>
</h2>

      <p className="mt-6 text-lg text-gray-500 leading-relaxed">
        Tim kami terdiri dari profesional berpengalaman di bidang
        akademik, teknologi, pengembangan aplikasi, dan corporate
        management untuk memberikan layanan terbaik.
      </p>
    </div>

    {/* Leadership Cards */}
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {leadership.map((leader, index) => {
        const Icon = leader.icon;
        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/5 to-orange-500/10" />
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-2xl bg-orange-600 text-white shadow-lg">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{leader.name}</h3>
              <p className="mt-2 text-gray-500 font-medium">{leader.role}</p>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-orange-500" />
            </div>
          </div>
        );
      })}
    </div>
  </div>



    {/* Team Division */}
    <div className="mt-24  max-w-7xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
        <div className="text-left">
          <h3 className="text-3xl font-bold text-gray-900">Divisi Perusahaan</h3>
          <p className="mt-2 text-gray-500">
            Kolaborasi lintas divisi untuk mendukung inovasi dan perkembangan perusahaan.
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/5 to-orange-500/10 rounded-3xl" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-biru-dark text-white shadow-lg">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="mt-6 text-2xl font-bold text-gray-900">{team.title}</h4>
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
                <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-orange-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>

</section>

  </>
  );
}