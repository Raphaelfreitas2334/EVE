import "./EveMetricCard.css";

import type { EveMetricCardProps } from "./types";

const trendClassMap: Record<string, string> = {

    success: "success",

    danger: "danger",

    warning: "warning",

    info: "info",

};

const EveMetricCard = ({

    title,

    value,

    icon,

    iconBackground = "linear-gradient(135deg,#7C3AED,#5B21B6)",

    iconColor = "#FFFFFF",

    description,

    subtitle,

    trend,

    badge,

    footer,

    onClick,

}: EveMetricCardProps) => {

    const clickable = Boolean(onClick);

    const trendClass =

    trend?.color

        ? trendClassMap[trend.color]

        : "";

    return (

        <article
            className={[

                "eve-metric-card",

                clickable && "clickable",

            ].filter(Boolean).join(" ")}

            onClick={onClick}
        >

            <div className="eve-metric-card-header">

                <div
                    className="eve-metric-card-icon"
                    style={{

                        background: iconBackground,

                        color: iconColor,

                    }}
                >

                    {icon}

                </div>

                {

                    badge && (

                        <div className="eve-metric-card-badge">

                            {badge}

                        </div>

                    )

                }

            </div>

            <div className="eve-metric-card-body">

                <span className="eve-metric-card-title">

                    {title}

                </span>

                <h2 className="eve-metric-card-value">

                    {value}

                </h2>

                {

                    description && (

                        <div className="eve-metric-card-description">

                            {description}

                        </div>

                    )

                }

                {

                    subtitle && (

                        <div className="eve-metric-card-subtitle">

                            {subtitle}

                        </div>

                    )

                }

                {

                    trend && (

                        <div
                            className={`eve-metric-card-trend ${trendClass}`}
                        >

                            <span className="eve-metric-card-trend-value">

                                {trend.value}

                            </span>

                            {

                                trend.description && (

                                    <span className="eve-metric-card-trend-description">

                                        {trend.description}

                                    </span>

                                )

                            }

                        </div>

                    )

                }

            </div>

            {

                footer && (

                    <div className="eve-metric-card-footer">

                        {footer}

                    </div>

                )

            }

        </article>

    );

};

export default EveMetricCard;