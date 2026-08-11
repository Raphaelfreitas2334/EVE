import "./EveProgressList.css";

import type {
    EveProgressListItem,
    EveProgressListProps,
} from "./types";

const DEFAULT_COLORS = [

    "#6D28D9",
    "#3B82F6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#06B6D4",

];

const EveProgressList = ({

    title,

    items,

    showValue = true,

    showPercentage = true,

    showProgress = true,

    compact = false,

}: EveProgressListProps) => {

    const getColor = (

        item: EveProgressListItem,
        index: number,

    ) => {

        return item.color ??
            DEFAULT_COLORS[index % DEFAULT_COLORS.length];

    };

    return (

        <div
            className={`eve-progress-list ${compact ? "compact" : ""}`}
        >

            {

                title && (

                    <h3 className="eve-progress-list-title">

                        {title}

                    </h3>

                )

            }

            <div className="eve-progress-list-items">

                {

                    items.map((item, index) => (

                        <div
                            key={item.id}
                            className="eve-progress-list-item"
                        >

                            <div className="eve-progress-list-header">

                                <div className="eve-progress-list-label">

                                    {

                                        item.icon && (

                                            <span className="eve-progress-list-icon">

                                                {item.icon}

                                            </span>

                                        )

                                    }

                                    <span>

                                        {item.label}

                                    </span>

                                </div>

                                <div className="eve-progress-list-values">

                                    {

                                        showValue && (

                                            <span className="eve-progress-list-value">

                                                {
                                                    item.displayValue ??
                                                    item.value.toLocaleString("pt-BR")
                                                }

                                            </span>

                                        )

                                    }

                                    {

                                        showPercentage && (

                                            <span className="eve-progress-list-percent">

                                                {item.percent}%

                                            </span>

                                        )

                                    }

                                </div>

                            </div>

                            {

                                item.description && (

                                    <div className="eve-progress-list-description">

                                        {item.description}

                                    </div>

                                )

                            }

                            {

                                showProgress && (

                                    <div className="eve-progress-list-track">

                                        <div
                                            className="eve-progress-list-bar"
                                            style={{

                                                width: `${item.percent}%`,

                                                background: getColor(item, index),

                                            }}
                                        />

                                    </div>

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default EveProgressList;