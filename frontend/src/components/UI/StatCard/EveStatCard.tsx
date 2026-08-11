import "./EveStatCard.css";

import type { ReactNode } from "react";

interface EveStatCardProps {

    title: string;

    value: string;

    icon: ReactNode;

    subtitle?: ReactNode;

    trend?: {

        value: string;

        description: string;

        color?: "success" | "danger" | "warning" | "info";

    };

}

const EveStatCard = ({
    title,
    value,
    icon,
    subtitle,
    trend,
}: EveStatCardProps) => {

    return (

        <article className="eve-stat-card">

            <div className="stat-icon">

                {icon}

            </div>

            <span className="stat-title">

                {title}

            </span>

            <h2 className="stat-value">

                {value}

            </h2>

            {trend ? (

                <div
                    className={`stat-trend ${trend.color ?? "success"}`}
                >

                    <strong>

                        {trend.value}

                    </strong>

                    <span>

                        {trend.description}

                    </span>

                </div>

            ) : subtitle ? (

                <p className="stat-subtitle">

                    {subtitle}

                </p>

            ) : null}

        </article>

    );

};

export default EveStatCard;