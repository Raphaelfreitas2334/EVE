import "./EveTableToolbar.css";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    createPortal,
} from "react-dom";

import type {
    LucideIcon,
} from "lucide-react";

import type {
    EveDataTableColumn,
} from "../DataTable/types";

import EveTableColumnSelector from "./EveTableColumnSelector";


/* ================================================================
   ACTION
================================================================ */

export interface EveTableToolbarAction {

    icon: LucideIcon;

    label: string;

    onClick?: () => void;

    disabled?: boolean;

    active?: boolean;

    dividerBefore?: boolean;
}


/* ================================================================
   PROPS
================================================================ */

interface EveTableToolbarProps<
    T extends object
> {

    title?: string;

    actions?: EveTableToolbarAction[];

    columns?: EveDataTableColumn<T>[];

    visibleKeys?: string[];

    onToggleColumn?: (
        key: string
    ) => void;

    onToggleAll?: () => void;

    onResetColumns?: () => void;

    children?: React.ReactNode;
}


/* ================================================================
   COMPONENT
================================================================ */

const EveTableToolbar = <
    T extends object
>({
    title = "Data Grid Premium",

    actions = [],

    columns = [],

    visibleKeys = [],

    onToggleColumn,

    onToggleAll,

    onResetColumns,

    children,
}: EveTableToolbarProps<T>) => {

    /* ============================================================
       COLUMN SELECTOR
    ============================================================ */

    const [
        columnSelectorOpen,
        setColumnSelectorOpen,
    ] = useState(false);


    const columnButtonRef =
        useRef<HTMLButtonElement | null>(null);


    const [
        selectorPosition,
        setSelectorPosition,
    ] = useState({
        top: 0,
        left: 0,
    });


    /* ============================================================
       POSIÇÃO DO SELECTOR
    ============================================================ */

    const updateSelectorPosition = () => {

        const button =
            columnButtonRef.current;

        if (!button) {
            return;
        }


        const rect =
            button.getBoundingClientRect();


        const selectorWidth = 340;

        const selectorHeight = 500;

        let left =
            rect.right -
            selectorWidth;


        let top =
            rect.bottom +
            8;


        /* --------------------------------------------------------
           ESQUERDA
        -------------------------------------------------------- */

        if (left < 12) {

            left = 12;

        }


        /* --------------------------------------------------------
           DIREITA
        -------------------------------------------------------- */

        if (
            left +
            selectorWidth >
            window.innerWidth -
            12
        ) {

            left =
                window.innerWidth -
                selectorWidth -
                12;

        }


        /* --------------------------------------------------------
           BAIXO
        -------------------------------------------------------- */

        if (
            top +
            selectorHeight >
            window.innerHeight -
            12
        ) {

            top =
                rect.top -
                selectorHeight -
                8;

        }


        /* --------------------------------------------------------
           TOPO
        -------------------------------------------------------- */

        if (top < 12) {

            top = 12;

        }


        setSelectorPosition({
            top,
            left,
        });

    };


    /* ============================================================
       TOGGLE
    ============================================================ */

    const handleColumnSelector = () => {

        if (columnSelectorOpen) {

            setColumnSelectorOpen(false);

            return;

        }


        updateSelectorPosition();

        setColumnSelectorOpen(true);

    };


    /* ============================================================
       SCROLL / RESIZE
    ============================================================ */

    useEffect(() => {

        if (!columnSelectorOpen) {
            return;
        }


        const update = () => {

            updateSelectorPosition();

        };


        window.addEventListener(
            "resize",
            update,
        );


        window.addEventListener(
            "scroll",
            update,
            true,
        );


        return () => {

            window.removeEventListener(
                "resize",
                update,
            );


            window.removeEventListener(
                "scroll",
                update,
                true,
            );

        };

    }, [
        columnSelectorOpen,
    ]);


    /* ============================================================
       ESC
    ============================================================ */

    useEffect(() => {

        if (!columnSelectorOpen) {
            return;
        }


        const handleKeyDown = (
            event: KeyboardEvent
        ) => {

            if (
                event.key === "Escape"
            ) {

                setColumnSelectorOpen(false);

            }

        };


        document.addEventListener(
            "keydown",
            handleKeyDown,
        );


        return () => {

            document.removeEventListener(
                "keydown",
                handleKeyDown,
            );

        };

    }, [
        columnSelectorOpen,
    ]);


    /* ============================================================
       RENDER
    ============================================================ */

    return (
        <>

            <div
                className="eve-table-toolbar"
            >

                {/* ==================================================
                    TÍTULO
                ================================================== */}

                <div
                    className="eve-table-toolbar-title"
                >
                    {title}
                </div>


                {/* ==================================================
                    CONTEÚDO
                ================================================== */}

                <div
                    className="eve-table-toolbar-content"
                >

                    {children}


                    <div
                        className="eve-table-toolbar-actions"
                    >

                        {actions.map(
                            (
                                action,
                                index,
                            ) => {

                                const Icon =
                                    action.icon;


                                return (
                                    <div
                                        key={`${action.label}-${index}`}
                                        className="eve-table-toolbar-action-wrapper"
                                    >

                                        {/* ------------------------------------------------
                                           DIVISOR
                                        ------------------------------------------------ */}

                                        {(
                                            action.dividerBefore
                                        ) && (

                                            <span
                                                className="eve-table-toolbar-divider"
                                                aria-hidden="true"
                                            />

                                        )}


                                        {/* ------------------------------------------------
                                           BOTÃO
                                        ------------------------------------------------ */}

                                        <button
                                            ref={
                                                action.label ===
                                                "Colunas"
                                                    ? columnButtonRef
                                                    : undefined
                                            }

                                            type="button"

                                            className={`
                                                eve-table-toolbar-action

                                                ${
                                                    action.active
                                                        ? "eve-table-toolbar-action-active"
                                                        : ""
                                                }
                                            `}

                                            onClick={
                                                action.label ===
                                                "Colunas"
                                                    ? handleColumnSelector
                                                    : action.onClick
                                            }

                                            disabled={
                                                action.disabled
                                            }

                                            aria-label={
                                                action.label
                                            }

                                            title={
                                                action.label
                                            }
                                        >

                                            <Icon
                                                size={19}
                                                strokeWidth={2}
                                            />

                                        </button>

                                    </div>
                                );

                            },
                        )}

                    </div>

                </div>

            </div>


            {/* ======================================================
                COLUMN SELECTOR
            ====================================================== */}

            {columnSelectorOpen &&
                columns.length > 0 &&
                createPortal(

                    <EveTableColumnSelector
                        columns={
                            columns
                        }

                        visibleKeys={
                            visibleKeys
                        }

                        onToggleColumn={
                            onToggleColumn ??
                            (() => {})
                        }

                        onToggleAll={
                            onToggleAll ??
                            (() => {})
                        }

                        onReset={
                            onResetColumns ??
                            (() => {})
                        }

                        style={{
                            position: "fixed",

                            top:
                                selectorPosition.top,

                            left:
                                selectorPosition.left,

                            zIndex: 999999,
                        }}
                    />,

                    document.body,
                )
            }

        </>
    );
};


export default EveTableToolbar;