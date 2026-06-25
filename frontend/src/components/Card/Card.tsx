import "./Card.css";

import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h3>{title}</h3>
        </div>
      )}

      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
