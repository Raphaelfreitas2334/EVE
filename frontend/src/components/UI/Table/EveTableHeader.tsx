import "./EveTableHead.css";

import type {
    CSSProperties,
    HTMLAttributes,
    ReactNode,
} from "react";

interface EveTableHeadProps
    extends HTMLAttributes<HTMLDivElement> {

    children: ReactNode;

    align?: "left" | "center" | "right";

    width?: string | number;

}

const EveTableHead = ({

    children,

    align = "left",

    width,

    className = "",

    style,

    ...rest

}: EveTableHeadProps) => {

    const mergedStyle: CSSProperties = {

        width,

        ...style,

    };

    return (

        <div

            className={`
                eve-table-head
                eve-table-head-${align}
                ${className}
            `}

            style={mergedStyle}

            {...rest}

        >

            {children}

        </div>

    );

};

export default EveTableHead;