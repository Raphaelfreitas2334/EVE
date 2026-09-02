import "./DashboardHeader.css";

const DashboardHeader = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="dashboard-header">

      <div>

        <h1>Bom dia, Raphael 👋</h1>

        <p>
          Veja os principais indicadores da sua instituição.
        </p>

      </div>

      <div className="dashboard-date">

        <span>Hoje é</span>

        <strong>{formattedDate}</strong>

      </div>

    </header>
  );
};

export default DashboardHeader;