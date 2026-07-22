import "./EveSelect.css";

import type { ChangeEventHandler } from "react";

import FormField from "../../Forms/FormField";

interface Option {
  value: string;

  label: string;
}

interface EveSelectProps {
  label?: string;

  required?: boolean;

  helper?: string;

  error?: string;

  success?: string;

  value?: string;

  options: Option[];

  placeholder?: string;

  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const EveSelect = ({
  label,
  required,
  helper,
  error,
  success,
  value,
  options,
  placeholder = "Selecione...",
  onChange,
}: EveSelectProps) => {
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
                    eve-select-wrapper
                    ${error ? "has-error" : ""}
                    ${success ? "has-success" : ""}
                `}
      >
        <select value={value} onChange={onChange}>
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* <ChevronDown size={18} className="eve-select-icon" /> */}
      </div>
    </FormField>
  );
};

export default EveSelect;
