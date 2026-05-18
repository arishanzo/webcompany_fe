import { BadgeDollarSign, Crown, Globe, GraduationCap, Megaphone, MonitorSmartphone, UserRound, Users } from "lucide-react";

  const teamsAll = () => {
  const leadership = [
    {
      name: "Dina Robiana Sitompul",
      role: "Direktur Utama",
      icon: Crown,
    },
    {
      name: "Sekretaris",
      role: "Management Support",
      icon: Users,
    },
    {
      name: "Wakil Direktur",
      role: "Vice Director",
      icon: Users,
    },
  ];


  
    const teams = [
      {
        title: "Akademik",
        icon: GraduationCap,
        members: ["Muhammad Rizki", "Zainab Djihat"],
      },
      {
        title: "SDM",
        icon: Users,
        members: ["Jois Ketrin", "Athilla Dhia"],
      },
      {
        title: "Finance & Accounting",
        icon: BadgeDollarSign,
        members: ["Sofiatun Nada"],
      },
      {
        title: "Corporate & Marketing",
        icon: Megaphone,
        members: [
          "Muhammad Dzaky",
          "Dwina Yabetzha",
          "Muhammad Azizul",
        ],
      },
      {
        title: "Website Development",
        icon: Globe,
        members: ["Aris Wahyudi", "Setiya Wahyu"],
      },
      {
        title: "Application Development",
        icon: MonitorSmartphone,
        members: [
          "Vikar Ryo",
          "Vill Valentinov",
          "Rafli Aditrya",
          "David Akmal",
        ],
      },
    ];

    return { teams,  leadership }

  }
  export default teamsAll;