import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
}

const SectionTitle = ({ icon, title }: Props) => {
  return (
    <div className="flex items-center space-x-2.5">
      {icon}
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default SectionTitle;
