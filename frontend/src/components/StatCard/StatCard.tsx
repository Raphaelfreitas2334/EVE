import "./StatCard.css";

import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

const StatCard = ({ title, value, icon: Icon }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span>{title}</span>
        <Icon size={24} />
      </div>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;
