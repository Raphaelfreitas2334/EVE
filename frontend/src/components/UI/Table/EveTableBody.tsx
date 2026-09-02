import "./EveTableBody.css";

import type {
    HTMLAttributes,
    ReactNode,
} from "react";

interface EveTableBodyProps
    extends HTMLAttributes<HTMLDivElement> {

    children: ReactNode;
}

const EveTableBody = ({
    children,
    className = "",
    ...rest
}: EveTableBodyProps) => {

    return (
        <div
            className={`
                eve-table-body
                ${className}
            `}
            {...rest}
        >
            {children}
        </div>
    );
};

export default EveTableBody;