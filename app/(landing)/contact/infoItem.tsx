

type InfoItemProps = {
  icon: string;   // tipe untuk icon dari lucide-react
  title: string;
  value: string;
};

const InfoItem: React.FC<InfoItemProps> = ({ icon: icon, title, value }) => {

    return (

         <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <p className="text-sm uppercase tracking-wide text-white/70 mb-2">
          {title}
        </p>
        <p className="text-lg leading-relaxed text-white">{value}</p>
      </div>
    </div>
    )
}
export default InfoItem;