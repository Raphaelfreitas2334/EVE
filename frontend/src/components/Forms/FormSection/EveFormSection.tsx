import "./EveFormSection.css";

import type { ReactNode } from "react";

interface EveFormSectionProps {
  title: string;

  subtitle?: string;

  children: ReactNode;
}

const EveFormSection = ({ title, subtitle, children }: EveFormSectionProps) => {
  return (
    <section className="eve-form-section">
      <header className="form-section-header">
        <h3>{title}</h3>

        {subtitle && <p>{subtitle}</p>}
      </header>

      <div className="form-section-content">{children}</div>
    </section>
  );
};

export default EveFormSection;
