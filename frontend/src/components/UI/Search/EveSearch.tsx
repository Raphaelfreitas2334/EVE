import "./EveSearch.css";

import {
    Search,
    X,
} from "lucide-react";

import {
    useState,
    type InputHTMLAttributes,
} from "react";

interface EveSearchProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "value" | "onChange"
    > {

    /**
     * Valor atual da busca.
     */
    value?: string;

    /**
     * Disparado sempre que o valor mudar.
     */
    onChange?: (
        value: string,
    ) => void;

    /**
     * Disparado quando o usuário limpa a busca.
     */
    onClear?: () => void;

}

const EveSearch = ({

    className = "",

    value,

    onChange,

    onClear,

    defaultValue,

    ...rest

}: EveSearchProps) => {

    /**
     * Estado interno utilizado
     * quando o componente não é controlado.
     */
    const [internalValue, setInternalValue] = useState(

        typeof defaultValue === "string"

            ? defaultValue

            : "",

    );

    /**
     * Permite usar o componente tanto
     * de forma controlada quanto independente.
     */
    const currentValue =

        value !== undefined

            ? value

            : internalValue;

    /**
     * Alteração do campo.
     */
    const handleChange = (

        event: React.ChangeEvent<HTMLInputElement>,

    ) => {

        const newValue = event.target.value;

        if (value === undefined) {

            setInternalValue(newValue);

        }

        onChange?.(newValue);

    };

    /**
     * Limpa o campo.
     */
    const clear = () => {

        if (value === undefined) {

            setInternalValue("");

        }

        onChange?.("");

        onClear?.();

    };

    return (

        <div

            className={[

                "eve-search",

                className,

            ]

                .filter(Boolean)

                .join(" ")}

        >

            <Search

                size={18}

                className="search-icon"

            />

            <input

                {...rest}

                value={currentValue}

                onChange={handleChange}

            />

            {currentValue && (

                <button

                    type="button"

                    onClick={clear}

                    className="clear-button"

                    aria-label="Limpar pesquisa"

                >

                    <X size={16} />

                </button>

            )}

        </div>

    );

};

export default EveSearch;