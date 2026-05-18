'use client';

import HeroSection from "../../herosection";
import CTALayanan from "./components/ctaLayanan";
import HeroSectionLayanan from "./components/herosectionlayanan";
import LayananPendidikan from "./components/layananpendidikan";
import LayananPendidikanTeknologi from "./components/layananpendidikanteknologi";


const LayananPendidikanSection = () => {

  return (
    <div className="bg-gray-50 text-gray-900 overflow-hidden">

    <HeroSectionLayanan />
    <LayananPendidikan />
    <LayananPendidikanTeknologi />
    <CTALayanan />


    </div>
  );
};

export default LayananPendidikanSection;
