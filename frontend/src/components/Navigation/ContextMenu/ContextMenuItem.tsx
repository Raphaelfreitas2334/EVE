import type { ContextMenuItem } from "./types";

interface Props {

    item: ContextMenuItem;

    close: () => void;

}

const MenuItem = ({
    item,
    close,
}: Props) => {

    if (item.divider) {

        return <hr className="context-divider" />;

    }

    return (

        <button
            type="button"
            disabled={item.disabled}
            className={`
                context-menu-item
                ${item.danger ? "danger" : ""}
            `}
            onClick={() => {

                if (item.disabled) return;

                item.onClick?.();

                close();

            }}
        >

            {item.icon}

            <span>

                {item.label}

            </span>

        </button>

    );

};

export default MenuItem;