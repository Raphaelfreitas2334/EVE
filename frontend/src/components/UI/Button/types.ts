import type {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

export interface EveButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    children?: ReactNode;

    variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "outline"
    | "ghost";
    
    size?:
        | "sm"
        | "md"
        | "lg";

    icon?: ReactNode;

    iconPosition?:
        | "left"
        | "right";

    loading?: boolean;

    fullWidth?: boolean;

}