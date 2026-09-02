import "./EveButton.css";

import type { EveButtonProps } from "./types";

const EveButton = ({

    children,

    variant = "primary",

    size = "md",

    icon,

    iconPosition = "left",

    loading = false,

    fullWidth = false,

    className = "",

    disabled,

    ...rest

}: EveButtonProps) => {

    return (

        <button

            className={`
                eve-button
                eve-button-${variant}
                eve-button-${size}
                ${fullWidth ? "eve-button-full" : ""}
                ${className}
            `}

            disabled={disabled || loading}

            {...rest}

        >

            {

                loading && (

                    <span className="eve-button-spinner" />

                )

            }

            {

                !loading &&
                icon &&
                iconPosition === "left" && (

                    <span className="eve-button-icon">

                        {icon}

                    </span>

                )

            }

            {

                children && (

                    <span className="eve-button-text">

                        {children}

                    </span>

                )

            }

            {

                !loading &&
                icon &&
                iconPosition === "right" && (

                    <span className="eve-button-icon">

                        {icon}

                    </span>

                )

            }

            {

                variant === "primary" &&
                !icon &&
                !loading && (

                    <span className="button-arrow">

                        →

                    </span>

                )

            }

        </button>

    );

};

export default EveButton;