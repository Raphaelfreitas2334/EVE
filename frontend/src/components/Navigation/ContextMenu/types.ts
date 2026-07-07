export interface ContextMenuItem {

    label?: string;

    icon?: React.ReactNode;

    danger?: boolean;

    disabled?: boolean;

    divider?: boolean;

    onClick?: () => void;

}