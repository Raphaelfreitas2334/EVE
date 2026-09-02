import "./EveTextarea.css";

import type { TextareaHTMLAttributes } from "react";

interface EveTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;

  error?: string;
}

const EveTextarea = ({
  label,
  error,
  className = "",
  rows = 4,
  ...rest
}: EveTextareaProps) => {
  return (
    <div className="eve-textarea-group">
      {label && <label className="eve-textarea-label">{label}</label>}

      <textarea rows={rows} className={`eve-textarea ${className}`} {...rest} />

      {error && <span className="eve-textarea-error">{error}</span>}
    </div>
  );
};

export default EveTextarea;
