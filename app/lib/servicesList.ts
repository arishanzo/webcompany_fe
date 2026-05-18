import { Cpu, Globe, GraduationCap, Smartphone, Wrench } from "lucide-react";

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
    titleKey: "Aplikasi Mobile & Desktop",
    descKey: "Mengembangkan aplikasi mobile yang inovatif dan pengalaman pengguna yang luar biasa.",
    features: ["Android & iOS Native", "React Native / Flutter", "UI/UX Mobile Design","Web Based Mobile & Desktop Apps"],
  },
  // {
  //   icon: GraduationCap,
  //   color: "text-orange-600",
  //   bg: "bg-orange-50",
  //   border: "border-orange-100",
  //   titleKey: "Akademik",
  //   descKey: "Menyediakan program pelatihan dan pendidikan untuk meningkatkan kemampuan teknologi informasi.",
  //   features: ["Mengajar di bidang TI", "Sistem Informasi dan Bisnis Digital",  "Mengajar Kelas Pemrograman (Coding Classes)", "Konsultasi dalam Penulisan Artikel untuk Jurnal Ilmiah", "Konsultasi skripsi/thesis/disertasi",
  //   "Penyediaan pembicara seminar profesional",],
  // },
  {
  icon: Cpu,
  color: "text-blue-600",
  bg: "bg-blue-50",
  border: "border-blue-100",
  titleKey: "IoT Solusi & Otomatisasi",
  descKey: "Menyediakan solusi Internet of Things (IoT) untuk integrasi perangkat pintar dan otomatisasi sistem.",
  features: [
    "Pengembangan perangkat IoT",
    "Integrasi sensor dan aktuator",
    "Monitoring real-time melalui dashboard",
    "Otomatisasi proses bisnis dengan IoT"
  ],
},
{
  icon: Wrench,
  color: "text-green-600",
  bg: "bg-green-50",
  border: "border-green-100",
  titleKey: "Perbaikan Bug & Optimasi",
  descKey: "Layanan perbaikan bug, troubleshooting, dan optimasi performa aplikasi maupun sistem.",
  features: [
    "Identifikasi dan perbaikan bug",
    "Troubleshooting error aplikasi",
    "Optimasi performa sistem",
    "Peningkatan keamanan dan stabilitas"
  ],
},

];

export default serviceList;