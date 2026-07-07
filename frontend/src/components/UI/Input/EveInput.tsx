import "./EveInput.css";

import { useState } from "react";
import type {
    InputHTMLAttributes,
    ReactNode,
} from "react";

import {
    Eye,
    EyeOff,
} from "lucide-react";

interface EveInputProps
    extends InputHTMLAttributes<HTMLInputElement> {

    label?: string;

    error?: string;

    icon?: ReactNode;

}

const EveInput = ({
    label,
    error,
    icon,
    type = "text",
    className = "",
    ...rest
}: EveInputProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (

        <div className="eve-input-group">

            {

                label && (

                    <label className="eve-input-label">

                        {label}

                    </label>

                )

            }

            <div className="eve-input-wrapper">

                {

                    icon && (

                        <span className="input-icon">

                            {icon}

                        </span>

                    )

                }

                <input
                    type={
                        isPassword
                            ? showPassword
                                ? "text"
                                : "password"
                            : type
                    }
                    className={`eve-input ${className}`}
                    {...rest}
                />

                {

                    isPassword && (

                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >

                            {

                                showPassword
                                    ? <EyeOff size={18}/>
                                    : <Eye size={18}/>

                            }

                        </button>

                    )

                }

            </div>

            {

                error && (

                    <span className="eve-input-error">

                        {error}

                    </span>

                )

            }

        </div>

    );

};

export default EveInput;