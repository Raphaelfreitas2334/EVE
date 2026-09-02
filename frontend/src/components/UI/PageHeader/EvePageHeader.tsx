import "./EvePageHeader.css";

interface EvePageHeaderProps {
  title: string;
  subtitle?: string;
}

const EvePageHeader = ({
  title,
  subtitle,
}: EvePageHeaderProps) => {
  return (
    <header className="eve-page-header">
      <div>
        <h1>{title}</h1>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default EvePageHeader;