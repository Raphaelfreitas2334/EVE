import "./EveTableHeader.css";

import type {
    CSSProperties,
    HTMLAttributes,
    ReactNode,
} from "react";

interface EveTableHeaderProps
    extends HTMLAttributes<HTMLDivElement> {

    children: ReactNode;

    align?: "left" | "center" | "right";

    width?: string | number;
}

const EveTableHeader = ({
    children,
    align = "left",
    width,
    className = "",
    style,
    ...rest
}: EveTableHeaderProps) => {

    const mergedStyle: CSSProperties = {
        width,
        ...style,
    };

    return (
        <div
            className={`
                eve-table-header
                ${className}
            `}
            style={mergedStyle}
            {...rest}
        >
            {children}
        </div>
    );
};

export default EveTableHeader;