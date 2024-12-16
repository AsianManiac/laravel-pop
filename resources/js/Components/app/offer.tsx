import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  text: string;
}

const Offer = ({ icon: Icon, label, text }: Props) => {
  return (
    <div className="flex flex-col space-y-2 bg-card shadow-md rounded-lg px-2 py-8 items-center justify-self-center">
      <Icon className="w-8 h-8 text-center" />
      <h3 className="font-bold md:text-lg text-center text-base">{label}</h3>
      <p className="text-sm text-muted-foreground line-clamp-4 text-center">
        {text}
      </p>
    </div>
  );
};

export default Offer;
