import "./EveContextMenu.css";

import {
    useState,
    useRef,
    useEffect,
} from "react";

import { createPortal } from "react-dom";

import { MoreVertical } from "lucide-react";

import ContextMenuItem from "./ContextMenuItem";

import type { ContextMenuItem as MenuItem } from "./types";

interface EveContextMenuProps {

    items: MenuItem[];

}

const EveContextMenu = ({
    items,
}: EveContextMenuProps) => {

    const [open, setOpen] = useState(false);

    const [position, setPosition] = useState({
        top: 0,
        left: 0,
    });

    const buttonRef = useRef<HTMLButtonElement>(null);

    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {

        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();

        const menuWidth = 220;
        const menuHeight = 260;

        let left = rect.right + window.scrollX - menuWidth;

        let top = rect.bottom + window.scrollY + 8;

        if (left < 8) {

            left = 8;

        }

        if (window.innerWidth - rect.left < menuWidth) {

            left = rect.left + window.scrollX - menuWidth + rect.width;

        }

        if (window.innerHeight - rect.bottom < menuHeight) {

            top = rect.top + window.scrollY - menuHeight - 8;

        }

        setPosition({

            top,

            left,

        });

        setOpen(value => !value);

    };

    useEffect(() => {

        const handleOutside = (event: MouseEvent) => {

            if (

                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)

            ) {

                setOpen(false);

            }

        };

        const handleKeyDown = (event: KeyboardEvent) => {

            if (event.key === "Escape") {

                setOpen(false);

            }

        };

        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {

            document.removeEventListener(
                "mousedown",
                handleOutside
            );
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, []);

    return (

        <>

            <button
                ref={buttonRef}
                type="button"
                className="context-trigger"
                onClick={toggleMenu}
            >

                <MoreVertical size={18} />

            </button>

            {

                open &&

                createPortal(

                    <div
                        ref={menuRef}
                        className="eve-context-menu"
                        style={{

                            top: position.top,

                            left: position.left,

                        }}
                    >

                        {

                            items.map((item, index) => (

                                <ContextMenuItem
                                    key={index}
                                    item={item}
                                    close={() => setOpen(false)}
                                />

                            ))

                        }

                    </div>,

                    document.body

                )

            }

        </>

    );

};

export default EveContextMenu;