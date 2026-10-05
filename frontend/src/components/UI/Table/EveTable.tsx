import "./EveTable.css";

import type {
    HTMLAttributes,
    ReactNode,
} from "react";

interface EveTableProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

const EveTable = ({
    children,
    className = "",
    ...rest
}: EveTableProps) => {
    return (
        <section
            className={`
                eve-table
                ${className}
            `}
            {...rest}
        >
            <div className="eve-table-content">
                {children}
            </div>
        </section>
    );
};

export default EveTable;