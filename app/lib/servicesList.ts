import { Globe, GraduationCap, Smartphone } from "lucide-react";

const serviceList = [
  {
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    titleKey: "Website Kustom & Aplikasi Web",
    descKey: "Membangun platform web performa tinggi dengan arsitektur modern yang skalabel dan aman.",
    features: ["Landing Page & Company Profile", "Web App & Dashboard", "E-Commerce & Marketplace", "API Integration & Backend"],
  },
  {
    icon: Smartphone,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    titleKey: "Aplikasi Mobile",
    descKey: "Mengembangkan aplikasi mobile yang inovatif dan pengalaman pengguna yang luar biasa.",
    features: ["Android & iOS Native", "React Native / Flutter", "UI/UX Mobile Design","Web Based Mobile"],
  },
  {
    icon: GraduationCap,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    titleKey: "Pendidikan & Pelatihan",
    descKey: "Menyediakan program pelatihan dan pendidikan untuk meningkatkan kemampuan teknologi informasi.",
    features: ["Mengajar di bidang TI", "Sistem Informasi dan Bisnis Digital",  "Mengajar Kelas Pemrograman (Coding Classes)", "Pendampingan dalam Penulisan Artikel untuk Jurnal Ilmiah"],
  },
];

export default serviceList;