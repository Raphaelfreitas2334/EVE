import "./TeachersAverage.css";

import { Award, CircleAlert, TriangleAlert } from "lucide-react";

interface TeachersAverageProps {
  value: number;
}

const TeachersAverage = ({ value }: TeachersAverageProps) => {
  const getClassification = () => {
    if (value >= 9) {
      return {
        label: "Excelente",
        icon: <Award size={16} />,
        color: "excellent",
      };
    }

    if (value >= 7) {
      return {
        label: "Bom",
        icon: <Award size={16} />,
        color: "good",
      };
    }

    if (value >= 5) {
      return {
        label: "Regular",
        icon: <CircleAlert size={16} />,
        color: "warning",
      };
    }

    return {
      label: "Crítico",
      icon: <TriangleAlert size={16} />,
      color: "danger",
    };
  };

  const classification = getClassification();

  return (
    <div className={`teachers-average ${classification.color}`}>
      {classification.icon}

      <div>
        <strong>{value.toFixed(1)}</strong>

        <span>{classification.label}</span>
      </div>
    </div>
  );
};

export default TeachersAverage;
