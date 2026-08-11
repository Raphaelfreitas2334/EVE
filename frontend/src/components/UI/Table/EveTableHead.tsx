import "./EveTableHead.css";

import type {
    CSSProperties,
    ReactNode,
} from "react";

interface EveTableHeadProps {

    children: ReactNode;

    align?: "left" | "center" | "right";

    width?: string | number;

    className?: string;

}

const EveTableHead = ({

    children,

    align = "left",

    width,

    className = "",

}: EveTableHeadProps) => {

    const style: CSSProperties = {};

    if (width) {

        style.width = width;

    }

    return (

        <div

            className={`
                eve-table-head
                eve-table-head-${align}
                ${className}
            `}

            style={style}

        >

            {children}

        </div>

    );

};

export default EveTableHead;