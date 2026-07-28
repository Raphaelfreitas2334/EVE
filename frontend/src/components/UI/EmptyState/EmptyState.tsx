import "./EmptyState.css";

import type { ReactNode } from "react";

interface EmptyStateProps {

    icon?: ReactNode;

    title: string;

    description: string;

    action?: ReactNode;

}

const EmptyState = ({
    icon,
    title,
    description,
    action,
}: EmptyStateProps) => {

    return (

        <section className="empty-state">

            {icon}

            <h3>{title}</h3>

            <p>{description}</p>

            {action}

        </section>

    );

};

export default EmptyState;