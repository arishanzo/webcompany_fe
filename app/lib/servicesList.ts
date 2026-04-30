import { Globe, GraduationCap, Smartphone } from "lucide-react";

const serviceList = [
  {
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    titleKey: "services_title3",
    descKey: "services_subtitle3",
    features: ["Landing Page & Company Profile", "Web App & Dashboard", "E-Commerce & Marketplace", "API Integration & Backend"],
  },
  {
    icon: Smartphone,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    titleKey: "services_title4",
    descKey: "services_subtitle4",
    features: ["Android & iOS Native", "React Native / Flutter", "UI/UX Mobile Design", "App Store Deployment"],
  },
  {
    icon: GraduationCap,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    titleKey: "services_card_title",
    descKey: "services_card_subtitle",
    features: ["Bootcamp Full-Stack 12 Minggu", "Workshop Spesialis React & Docker", "UI/UX Intensive Figma", "DevOps & Cloud AWS"],
  },
];

export default serviceList;