import "./EveInput.css";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import FormField from "../../Forms/FormField";

interface EveInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  required?: boolean;

  helper?: string;

  error?: string;

  success?: string;
}

const EveInput = ({
  label,
  required,
  helper,
  error,
  success,
  type,
  className = "",
  ...rest
}: EveInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <FormField
      label={label}
      required={required}
      helper={helper}
      error={error}
      success={success}
    >
      <div
        className={`
                    eve-input-wrapper
                    ${error ? "has-error" : ""}
                    ${success ? "has-success" : ""}
                `}
      >
        {type === "email" ? (
          <Mail size={18} className="input-icon" />
        ) : isPassword ? (
          <Lock size={18} className="input-icon" />
        ) : null}

        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={`eve-input ${className}`}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </FormField>
  );
};

export default EveInput;
