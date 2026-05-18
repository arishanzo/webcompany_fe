import { BadgeDollarSign, Crown, Globe, GraduationCap, Megaphone, MonitorSmartphone, UserRound, Users } from "lucide-react";

  const teamsAll = () => {
  const leadership = [
    {
      name: "Direktur Utama",
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
      role: "Wakil Direktur",
      icon: Users,
    },
  ];


  
    const teams = [
      {
        title: "Akademik",
        icon: GraduationCap,
        members: [""],
      },
      {
        title: "SDM",
        icon: Users,
        members: [""],
      },
      {
        title: "Finance & Accounting",
        icon: BadgeDollarSign,
        members: [""],
      },
      {
        title: "Corporate & Marketing",
        icon: Megaphone,
        members: [
          ""
        ],
      },
      {
        title: "Website Development",
        icon: Globe,
        members: [""],
      },
      {
        title: "Application Development",
        icon: MonitorSmartphone,
        members: [
          "",
        ],
      },
    ];

    return { teams,  leadership }

  }
  export default teamsAll;