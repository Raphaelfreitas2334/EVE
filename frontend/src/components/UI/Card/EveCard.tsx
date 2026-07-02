import "./EveCard.css";

import type { ReactNode } from "react";

interface EveCardProps {

    children: ReactNode;

    className?: string;

}

const EveCard = ({
    children,
    className = "",
}: EveCardProps) => {

    return (

        <section
            className={`eve-card ${className}`}
        >

            {children}

        </section>

    );

};

export default EveCard;