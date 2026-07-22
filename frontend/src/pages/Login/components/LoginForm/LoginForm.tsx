import "./LoginForm.css";

import EveButton from "../../../../components/UI/Button";
import EveInput from "../../../../components/UI/Input";

import { BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <section className="login-form">
      <div className="login-logo">
        <div className="login-logo-icon">
          <BrainCircuit size={28} />
        </div>

        <div>
          <h2>EVE</h2>

          <span>Educational Vision Ecosystem</span>
        </div>
      </div>

      <div className="login-header">
        <h1>Bem-vindo de volta 👋</h1>

        <p>Entre com sua conta para acessar sua instituição.</p>
      </div>

      <div className="login-fields">
        <EveInput label="Email" type="email" placeholder="Digite seu email" />

        <EveInput
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
      </div>

      <div className="login-options">
        <label>
          <input type="checkbox" />
          Lembrar-me
        </label>

        <a href="#">Esqueci minha senha</a>
      </div>

      <EveButton onClick={() => navigate("/dashboard")}>
        Entrar no EVE
      </EveButton>
    </section>
  );
};

export default LoginForm;
