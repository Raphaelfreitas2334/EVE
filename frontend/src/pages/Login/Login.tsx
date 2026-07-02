import "./Login.css"

import LoginHero from "./components/LoginHero/LoginHero";
import LoginForm from "./components/LoginForm/LoginForm";

const Login = () => {
  return(
    <div className="login-page">
      <div className="login-container">
        <LoginHero />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;