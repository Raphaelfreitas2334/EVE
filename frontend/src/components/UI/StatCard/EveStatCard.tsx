import "./EveStatCard.css";

import type { ReactNode } from "react";

interface EveStatCardProps {

    title:string;

    value:string;

    subtitle:string;

    icon:ReactNode;

}

const EveStatCard = ({
    title,
    value,
    subtitle,
    icon
}:EveStatCardProps)=>{

    return(

        <article className="eve-stat-card">

            <div className="stat-icon">

                {icon}

            </div>

            <span className="stat-title">

                {title}

            </span>

            <h2>

                {value}

            </h2>

            <p>

                {subtitle}

            </p>

        </article>

    );

};

export default EveStatCard;