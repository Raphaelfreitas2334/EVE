import "./EveTableCell.css";

import type {
    CSSProperties,
    HTMLAttributes,
    ReactNode,
} from "react";

interface EveTableCellProps
    extends HTMLAttributes<HTMLDivElement> {

    children: ReactNode;

    align?: "left" | "center" | "right";

    width?: string | number;
}

const EveTableCell = ({
    children,
    align = "left",
    width,
    className = "",
    style,
    ...rest
}: EveTableCellProps) => {

    const mergedStyle: CSSProperties = {
        width,
        ...style,
    };

    return (
        <div
            className={`
                eve-table-cell
                eve-table-cell-${align}
                ${className}
            `}
            style={mergedStyle}
            {...rest}
        >
            {children}
        </div>
    );
};

export default EveTableCell;