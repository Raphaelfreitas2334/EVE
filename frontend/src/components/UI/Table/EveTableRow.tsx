import "./EveTableRow.css";

import type {
    CSSProperties,
    ReactNode,
} from "react";

interface EveTableRowProps {

    children: ReactNode;

    hover?: boolean;

    columns?: string;

    className?: string;

    style?: CSSProperties;
}

const EveTableRow = ({
    children,
    hover = true,
    columns,
    className = "",
    style,
}: EveTableRowProps) => {

    const mergedStyle: CSSProperties = {
        gridTemplateColumns: columns,
        ...style,
    };

    return (
        <div
            className={`
                eve-table-row
                ${hover ? "eve-table-row-hover" : ""}
                ${className}
            `}
            style={mergedStyle}
        >
            {children}
        </div>
    );
};

export default EveTableRow;