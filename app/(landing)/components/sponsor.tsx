'use client';

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const techStack = [
  { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png' },
  { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
];

const Sponsor = () => {
  const doubled = [...techStack, ...techStack];

  const { t } = useLanguage();

  return (
    <>

      <section className="w-full bg-gray-100 border-y border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            {t('hero_section_tech')}
          </p>
        </div>

        <div className="overflow-hidden relative max-w-7xl justify-center mx-auto mb-4">
        
          <div className="marquee-track mt-4 flex items-center gap-12">
            {doubled.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center mx-8 gap-2 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default"
                style={{ minWidth: '80px' }}
              >
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="h-8 w-8 object-contain"
                  width={8}
                  height={8}
                  unoptimized
                />
                <span className="text-xs font-medium text-gray-500 whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsor;
