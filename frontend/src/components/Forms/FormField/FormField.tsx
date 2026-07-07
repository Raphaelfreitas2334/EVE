import "./FormField.css";

import type { ReactNode } from "react";

import { CircleAlert, CircleCheck } from "lucide-react";

interface FormFieldProps {
  label?: string;

  required?: boolean;

  helper?: string;

  error?: string;

  success?: string;

  children: ReactNode;
}

const FormField = ({
  label,
  required,
  helper,
  error,
  success,
  children,
}: FormFieldProps) => {
  return (
    <div className="eve-form-field">
      {label && (
        <label className="eve-form-label">
          {label}

          {required && <span className="required">*</span>}
        </label>
      )}

      {children}

      {helper && !error && !success && (
        <span className="eve-form-helper">{helper}</span>
      )}

      {error && (
        <span className="eve-form-error">
          <CircleAlert size={15} />

          {error}
        </span>
      )}

      {success && !error && (
        <span className="eve-form-success">
          <CircleCheck size={15} />

          {success}
        </span>
      )}
    </div>
  );
};

export default FormField;
