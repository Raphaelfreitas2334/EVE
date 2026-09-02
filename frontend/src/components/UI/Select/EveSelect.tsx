import "./EveSelect.css";

import {
    ChevronDown,
} from "lucide-react";

import type {
    ChangeEvent,
} from "react";

import FormField from "../../Forms/FormField";

export interface EveSelectOption {

    value: string;

    label: string;

}

export interface EveSelectProps {

    label?: string;

    required?: boolean;

    helper?: string;

    error?: string;

    success?: string;

    value?: string;

    options: EveSelectOption[];

    placeholder?: string;

    disabled?: boolean;

    onChange?: (

        value: string,

    ) => void;

}

const EveSelect = ({

    label,

    required,

    helper,

    error,

    success,

    value = "",

    options,

    placeholder = "Selecione...",

    disabled = false,

    onChange,

}: EveSelectProps) => {

    const handleChange = (

        event: ChangeEvent<HTMLSelectElement>,

    ) => {

        onChange?.(

            event.target.value,

        );

    };

    return (

        <FormField

            label={label}

            required={required}

            helper={helper}

            error={error}

            success={success}

        >

            <div

                className={[

                    "eve-select-wrapper",

                    error && "has-error",

                    success && "has-success",

                ]

                    .filter(Boolean)

                    .join(" ")}

            >

                <select

                    value={value}

                    disabled={disabled}

                    onChange={handleChange}

                >

                    <option value="">

                        {placeholder}

                    </option>

                    {

                        options.map(option => (

                            <option

                                key={option.value}

                                value={option.value}

                            >

                                {option.label}

                            </option>

                        ))

                    }

                </select>

                <ChevronDown

                    size={18}

                    className="eve-select-icon"

                />

            </div>

        </FormField>

    );

};

export default EveSelect;