import "./Panel.css";

import type { ReactNode } from "react";

interface PanelProps {
  title: string;
  children: ReactNode;
}

const Panel = ({ title, children }: PanelProps) => {
  return (
    <section className="panel">
      <header className="panel-header">
        <h3>{title}</h3>
      </header>
      <div className="panel-body">{children}</div>
    </section>
  );
};

export default Panel;
