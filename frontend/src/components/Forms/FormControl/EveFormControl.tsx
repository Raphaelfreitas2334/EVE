import "./EveFormControl.css";

import type { ReactNode } from "react";

interface EveFormControlProps {
  label?: string;

  required?: boolean;

  helperText?: string;

  error?: string;

  children: ReactNode;
}

const EveFormControl = ({
  label,
  required = false,
  helperText,
  error,
  children,
}: EveFormControlProps) => {
  return (
    <div className="eve-form-control">
      {label && (
        <label className="eve-form-label">
          {label}

          {required && <span className="required">*</span>}
        </label>
      )}

      {children}

      {helperText && !error && (
        <small className="helper-text">{helperText}</small>
      )}

      {error && <small className="error-text">{error}</small>}
    </div>
  );
};

export default EveFormControl;
