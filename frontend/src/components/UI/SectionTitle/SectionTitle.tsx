import "./SectionTitle.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
