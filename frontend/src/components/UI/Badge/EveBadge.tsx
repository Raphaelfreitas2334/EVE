import "./EveBadge.css";

interface EveBadgeProps {

    children: React.ReactNode;

    variant?:
        | "success"
        | "warning"
        | "danger"
        | "info"
        | "primary"
        | "gray";

}

const EveBadge = ({
    children,
    variant = "gray",
}: EveBadgeProps) => {

    return (

        <span
            className={`eve-badge ${variant}`}
        >

            {children}

        </span>

    );

};

export default EveBadge;