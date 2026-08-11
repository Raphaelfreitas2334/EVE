import "./EveRankingList.css";

import type {
    EveRankingItem,
    EveRankingListProps,
} from "./types";

const DEFAULT_PROGRESS_COLOR = "#6D28D9";

const EveRankingList = ({

    title,

    items,

    compact = false,

}: EveRankingListProps) => {

    const getProgressColor = (

        item: EveRankingItem,

    ) => {

        return item.progressColor ??
            DEFAULT_PROGRESS_COLOR;

    };

    return (

        <div
            className={`eve-ranking-list ${compact ? "compact" : ""}`}
        >

            {

                title && (

                    <h3 className="eve-ranking-list-title">

                        {title}

                    </h3>

                )

            }

            <div className="eve-ranking-list-items">

                {

                    items.map((item) => (

                        <article
                            key={item.id}
                            className="eve-ranking-list-item"
                        >

                            <div className="eve-ranking-list-main">

                                {

                                    item.avatar && (

                                        <div className="eve-ranking-list-avatar">

                                            {item.avatar}

                                        </div>

                                    )

                                }

                                <div className="eve-ranking-list-content">

                                    <div className="eve-ranking-list-top">

                                        <div>

                                            <h4 className="eve-ranking-list-name">

                                                {item.title}

                                            </h4>

                                            {

                                                item.subtitle && (

                                                    <span className="eve-ranking-list-subtitle">

                                                        {item.subtitle}

                                                    </span>

                                                )

                                            }

                                        </div>

                                        <span className="eve-ranking-list-value">

                                            {item.value}

                                        </span>

                                    </div>

                                    {

                                        typeof item.progress === "number" && (

                                            <div className="eve-ranking-list-track">

                                                <div
                                                    className="eve-ranking-list-bar"
                                                    style={{

                                                        width: `${item.progress}%`,

                                                        background: getProgressColor(item),

                                                    }}
                                                />

                                            </div>

                                        )

                                    }

                                    {

                                        (item.badge || item.action) && (

                                            <div className="eve-ranking-list-footer">

                                                {

                                                    item.badge && (

                                                        <div className="eve-ranking-list-badge">

                                                            {item.badge}

                                                        </div>

                                                    )

                                                }

                                                {

                                                    item.action && (

                                                        <div className="eve-ranking-list-action">

                                                            {item.action}

                                                        </div>

                                                    )

                                                }

                                            </div>

                                        )

                                    }

                                </div>

                            </div>

                        </article>

                    ))

                }

            </div>

        </div>

    );

};

export default EveRankingList;