import "./EveInput.css";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

interface EveInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const EveInput = ({
  label,
  error,
  type,
  className = "",
  ...rest
}: EveInputProps) => {

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="eve-input-group">

      {label && (
        <label className="eve-input-label">
          {label}
        </label>
      )}

      <div className="eve-input-wrapper">

        {type === "email" ? (
          <Mail size={18} className="input-icon" />
        ) : (
          <Lock size={18} className="input-icon" />
        )}

        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          className={`eve-input ${className}`}
          {...rest}
        />

        {isPassword && (

          <button
            type="button"
            className="toggle-password"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >

            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}

          </button>

        )}

      </div>

      {error && (
        <span className="eve-input-error">
          {error}
        </span>
      )}

    </div>
  );
};

export default EveInput;