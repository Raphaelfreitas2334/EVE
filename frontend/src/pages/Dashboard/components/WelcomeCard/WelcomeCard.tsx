import "./WelcomeCard.css";

interface WelcomeCardProps {
  name: string;
}

const WelcomeCard = ({ name }: WelcomeCardProps) => {
  return (
    <section className="welcome-card">
      <h2>Olá, {name} 👋</h2>

      <p>
        Bem-vindo ao <strong>Educational Vision Ecosystem</strong>.
      </p>

      <span>
        Acompanhe os principais indicadores da sua instituição de ensino.
      </span>
    </section>
  );
};

export default WelcomeCard;
