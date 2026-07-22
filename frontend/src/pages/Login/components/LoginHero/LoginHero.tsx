import "./LoginHero.css";

import { BrainCircuit, Sparkles } from "lucide-react";

const LoginHero = () => {
  return (
    <section className="login-hero">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>

      <div className="hero-content">
        <div className="hero-logo">
          <div className="logo-icon">
            <BrainCircuit size={28} />
          </div>

          <div>
            <h2>EVE</h2>

            <span>Educational Vision Ecosystem</span>
          </div>
        </div>

        <div className="hero-text">
          <span className="hero-badge">
            <Sparkles size={16} />
            Plataforma Inteligente
          </span>

          <h1>
            Transformando dados escolares em
            <span> decisões inteligentes.</span>
          </h1>

          <p>
            Uma plataforma criada para gestores, coordenadores e professores que
            desejam acompanhar a escola através de indicadores, análises e
            inteligência artificial.
          </p>
        </div>

        <div className="dashboard-preview">
          <div className="preview-navbar">
            <span>Dashboard</span>

            <div className="preview-avatar"></div>
          </div>

          <div className="preview-stats">
            <div className="stat">
              <span>Alunos</span>
              <strong>1245</strong>
            </div>

            <div className="stat">
              <span>Professores</span>
              <strong>82</strong>
            </div>

            <div className="stat">
              <span>Turmas</span>
              <strong>36</strong>
            </div>

            <div className="stat">
              <span>Frequência</span>
              <strong>94%</strong>
            </div>
          </div>

          <div className="mini-chart">
            <div className="bar h1"></div>
            <div className="bar h2"></div>
            <div className="bar h3"></div>
            <div className="bar h4"></div>
            <div className="bar h5"></div>
            <div className="bar h6"></div>
          </div>

          <div className="preview-alert">
            <div className="alert-dot"></div>

            <div>
              <strong>Central de Atenção</strong>

              <span>3 alunos apresentam risco de evasão.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
