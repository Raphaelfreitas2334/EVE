import "./EveSelect.css";

import type {
    ChangeEventHandler,
} from "react";

import { ChevronDown } from "lucide-react";

interface Option {

    value: string;

    label: string;

}

interface EveSelectProps {

    label?: string;

    value?: string;

    options: Option[];

    placeholder?: string;

    onChange?: ChangeEventHandler<HTMLSelectElement>;

}

const EveSelect = ({
    label,
    value,
    options,
    placeholder = "Selecione...",
    onChange,
}: EveSelectProps) => {

    return (

        <div className="eve-select">

            {

                label && (

                    <label>

                        {label}

                    </label>

                )

            }

            <div className="eve-select-wrapper">

                <select
                    value={value}
                    onChange={onChange}
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

        </div>

    );

};

export default EveSelect;