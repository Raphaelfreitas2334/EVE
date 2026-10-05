import "./EveDataTable.css";

import {
    Columns3,
    Download,
    ListFilter,
    PanelsTopLeft,
    Redo2,
    Search,
    Undo2,
} from "lucide-react";

import {
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import EmptyState from "../EmptyState";

import TablePagination from "../TablePagination";

import EveTable, {
    EveTableBody,
    EveTableCell,
    EveTableHead,
    EveTableHeader,
    EveTableRow,
    EveTableToolbar,
} from "../Table";

import type {
    EveDataTableColumn,
    EveDataTableProps,
} from "./types";


/* ================================================================
   COMPONENT
================================================================ */

const EveDataTable = <
    T extends object
>({

    rowKey = "id",

    columns,

    rows,

    table,

    hoverRows = true,

    loading = false,

    actions,

    actionsTitle = "Ações",

    actionsWidth = "120px",

    emptyTitle =
        "Nenhum registro encontrado",

    emptyDescription =
        "Não existem registros para exibir.",

    emptyIcon,

    emptyAction,

}: EveDataTableProps<T>) => {


    /* ============================================================
       COLUNAS INICIAIS
    ============================================================ */

    const initialVisibleColumnKeys =
        useMemo(

            () =>
                columns
                    .filter(
                        column =>
                            !column.hidden,
                    )
                    .map(
                        column =>
                            String(
                                column.key,
                            ),
                    ),

            [columns],

        );


    /* ============================================================
       COLUNAS VISÍVEIS
    ============================================================ */

    const [
        visibleColumnKeys,
        setVisibleColumnKeys,
    ] = useState<string[]>(
        initialVisibleColumnKeys,
    );

    const [
    searchTerm,
    setSearchTerm,
    ] = useState("");

    const [
        searchOpen,
        setSearchOpen,
    ] = useState(false);


    /* ============================================================
       SINCRONIZAÇÃO
    ============================================================ */

    useEffect(() => {

        setVisibleColumnKeys(
            initialVisibleColumnKeys,
        );

    }, [
        initialVisibleColumnKeys,
    ]);


    /* ============================================================
       FILTRO DAS COLUNAS
    ============================================================ */

    const visibleColumns =
        useMemo(

            () =>
                columns.filter(
                    column =>
                        visibleColumnKeys.includes(
                            String(
                                column.key,
                            ),
                        ),
                ),

            [
                columns,
                visibleColumnKeys,
            ],

        );

    /* ============================================================
    PESQUISA GLOBAL
    ============================================================ */

    const filteredRows = useMemo(() => {

        const normalizedSearch = searchTerm
            .trim()
            .toLocaleLowerCase("pt-BR");

        if (!normalizedSearch) {
            return rows;
        }

        return rows.filter(row => {

            const record =
                row as Record<string, unknown>;

            return visibleColumns.some(column => {

                const value =
                    record[String(column.key)];

                if (
                    value === null ||
                    value === undefined
                ) {
                    return false;
                }

                return String(value)
                    .trim()
                    .toLocaleLowerCase("pt-BR")
                    .includes(normalizedSearch);

            });

        });

    }, [
        rows,
        visibleColumns,
        searchTerm,
    ]);


    /* ============================================================
       COLUNAS FINAIS
    ============================================================ */

    const finalColumns =
        useMemo<
            EveDataTableColumn<T>[]
        >(

            () => {

                if (!actions) {

                    return visibleColumns;

                }


                return [

                    ...visibleColumns,

                    {

                        key:
                            "__actions",

                        title:
                            actionsTitle,

                        width:
                            actionsWidth,

                        align:
                            "center",

                    },

                ];

            },

            [
                visibleColumns,

                actions,

                actionsTitle,

                actionsWidth,
            ],

        );


    /* ============================================================
       GRID
    ============================================================ */

    const gridTemplateColumns =
        useMemo(

            () =>

                finalColumns
                    .map(
                        column =>
                            column.width ??
                            "minmax(0, 1fr)",
                    )
                    .join(" "),

            [
                finalColumns,
            ],

        );


    /* ============================================================
       TOGGLE COLUNA
    ============================================================ */

    const handleToggleColumn = (
        key: string,
    ) => {

        setVisibleColumnKeys(
            current => {

                if (
                    current.includes(key)
                ) {

                    return current.filter(
                        item =>
                            item !== key,
                    );

                }


                return [

                    ...current,

                    key,

                ];

            },
        );

    };


    /* ============================================================
       TOGGLE TODAS
    ============================================================ */

    const handleToggleAllColumns =
        () => {

            const selectableKeys =
                columns.map(
                    column =>
                        String(
                            column.key,
                        ),
                );


            const allVisible =
                selectableKeys.length > 0 &&
                selectableKeys.every(
                    key =>
                        visibleColumnKeys.includes(
                            key,
                        ),
                );


            if (allVisible) {

                setVisibleColumnKeys(
                    [],
                );

                return;

            }


            setVisibleColumnKeys(
                selectableKeys,
            );

        };


    /* ============================================================
       RESET
    ============================================================ */

    const handleResetColumns =
        () => {

            setVisibleColumnKeys(
                initialVisibleColumnKeys,
            );

        };


    /* ============================================================
       EXPORTAÇÃO CSV
    ============================================================ */

    const handleExportCsv = () => {

        if (
            rows.length === 0 ||
            visibleColumns.length === 0
        ) {
            return;
        }


        const escapeCsvValue = (
            value: unknown,
        ) => {

            const text =
                value == null
                    ? ""
                    : String(value);


            return `"${text.replace(
                /"/g,
                '""',
            )}"`;

        };


        const header =
            visibleColumns
                .map(
                    column =>
                        escapeCsvValue(
                            column.title,
                        ),
                )
                .join(",");


        const body =
            rows.map(
                row => {

                    const record =
                        row as Record<
                            string,
                            unknown
                        >;


                    return visibleColumns
                        .map(
                            column =>
                                escapeCsvValue(
                                    record[
                                        String(
                                            column.key,
                                        )
                                    ],
                                ),
                        )
                        .join(",");

                },
            );


        const csv =
            [
                header,
                ...body,
            ].join("\r\n");


        const blob =
            new Blob(
                [
                    "\uFEFF" + csv,
                ],
                {
                    type:
                        "text/csv;charset=utf-8;",
                },
            );


        const url =
            URL.createObjectURL(
                blob,
            );


        const link =
            document.createElement(
                "a",
            );


        link.href =
            url;


        link.download =
            "eve-data-table.csv";


        document.body.appendChild(
            link,
        );


        link.click();


        link.remove();


        URL.revokeObjectURL(
            url,
        );

    };


    /* ============================================================
       TOOLBAR ACTIONS
    ============================================================ */

    const toolbarActions = [

        {
            icon: Undo2,

            label: "Desfazer",

            disabled: true,
        },

        {
            icon: Redo2,

            label: "Refazer",

            disabled: true,
        },

        {
            icon: Columns3,

            label: "Colunas",

            active: false,
        },

        {
            icon: ListFilter,

            label: "Filtros",

            disabled: true,
        },

        {
            icon: PanelsTopLeft,

            label: "Agrupamento",

            dividerBefore: true,

            disabled: true,
        },

        {
            icon: Download,

            label: "Exportar",

            dividerBefore: true,

            onClick:
                handleExportCsv,

            disabled:
                rows.length === 0,
        },

        {
            icon: Search,

            label: "Pesquisar",

            dividerBefore: true,

            onClick: () => {
                setSearchOpen(
                    previous => !previous,
                );
            },

            disabled: false,
        },

    ];


    /* ============================================================
       LOADING
    ============================================================ */

    if (loading) {

        return (

            <div
                className="eve-data-table"
            >

                <EveTable>

                    <EveTableToolbar
                        title="Data Grid Premium"

                        actions={
                            toolbarActions
                        }

                        columns={
                            columns
                        }

                        visibleKeys={
                            visibleColumnKeys
                        }

                        onToggleColumn={
                            handleToggleColumn
                        }

                        onToggleAll={
                            handleToggleAllColumns
                        }

                        onResetColumns={
                            handleResetColumns
                        }
                    >
                        {searchOpen && (
                            <div className="eve-data-table-search">

                                <Search
                                    size={16}
                                    aria-hidden="true"
                                />

                                <input
                                    type="search"
                                    value={searchTerm}
                                    onChange={
                                        event =>
                                            setSearchTerm(
                                                event.target.value,
                                            )
                                    }
                                    placeholder="Pesquisar..."
                                    aria-label="Pesquisar registros"
                                    autoFocus
                                />

                                {searchTerm && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSearchTerm("")
                                        }
                                        aria-label="Limpar pesquisa"
                                    >
                                        ×
                                    </button>
                                )}

                            </div>
                        )}
                    </EveTableToolbar>

                    <EmptyState

                        icon={
                            emptyIcon
                        }

                        title={
                            searchTerm
                                ? "Nenhum resultado encontrado"
                                : emptyTitle
                        }

                        description={
                            searchTerm
                                ? "Tente pesquisar por outro termo."
                                : emptyDescription
                        }

                        action={
                            searchTerm
                                ? undefined
                                : emptyAction
                        }

                    />

                </EveTable>

            </div>

        );

    }


    /* ============================================================
       TABELA
    ============================================================ */

    return (

        <div
            className="eve-data-table"
        >

            <EveTable>


                {/* ==================================================
                    TOOLBAR
                ================================================== */}

                <EveTableToolbar

                    title="Data Grid Premium"

                    actions={
                        toolbarActions
                    }

                    columns={
                        columns
                    }

                    visibleKeys={
                        visibleColumnKeys
                    }

                    onToggleColumn={
                        handleToggleColumn
                    }

                    onToggleAll={
                        handleToggleAllColumns
                    }

                    onResetColumns={
                        handleResetColumns
                    }

                >
                    {searchOpen && (

                        <div
                            className="eve-data-table-search"
                        >

                            <Search
                                size={16}
                                aria-hidden="true"
                            />

                            <input
                                type="search"
                                value={
                                    searchTerm
                                }
                                onChange={
                                    event =>
                                        setSearchTerm(
                                            event.target.value,
                                        )
                                }
                                placeholder="Pesquisar..."
                                aria-label="Pesquisar registros"
                                autoFocus
                            />

                            {searchTerm && (

                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearchTerm("")
                                    }
                                    aria-label="Limpar pesquisa"
                                >
                                    ×
                                </button>

                            )}

                        </div>

                    )}

                </EveTableToolbar>


                {/* ==================================================
                    HEADER
                ================================================== */}

                <div className="eve-data-table-scroll-region">
                <EveTableHeader>

                    <EveTableRow

                        hover={false}

                        columns={
                            gridTemplateColumns
                        }

                    >

                        {finalColumns.map(
                            column => (

                                <EveTableHead

                                    key={
                                        String(
                                            column.key,
                                        )
                                    }

                                    align={
                                        column.align
                                    }

                                >

                                    {
                                        column.title
                                    }

                                </EveTableHead>

                            ),
                        )}

                    </EveTableRow>

                </EveTableHeader>


                {/* ==================================================
                    BODY
                ================================================== */}

                <EveTableBody>

                    {filteredRows.length === 0 ? (

                        <EmptyState

                            icon={
                                emptyIcon
                            }

                            title={
                                emptyTitle
                            }

                            description={
                                emptyDescription
                            }

                            action={
                                emptyAction
                            }

                        />

                    ) : (

                        filteredRows.map(
                            (
                                row,
                                index,
                            ) => {

                                const record =
                                    row as Record<
                                        string,
                                        unknown
                                    >;


                                const key =
                                    record[
                                        String(
                                            rowKey,
                                        )
                                    ] ??
                                    index;


                                return (

                                    <EveTableRow

                                        key={
                                            String(
                                                key,
                                            )
                                        }

                                        hover={
                                            hoverRows
                                        }

                                        columns={
                                            gridTemplateColumns
                                        }

                                    >

                                        {finalColumns.map(
                                            column => {

                                                const value =
                                                    record[
                                                        String(
                                                            column.key,
                                                        )
                                                    ];


                                                return (

                                                    <EveTableCell

                                                        key={
                                                            String(
                                                                column.key,
                                                            )
                                                        }

                                                        align={
                                                            column.align
                                                        }

                                                    >

                                                        {
                                                            column.key ===
                                                            "__actions"

                                                                ? actions?.(
                                                                    row,
                                                                    index,
                                                                )

                                                                : column.render

                                                                    ? column.render(
                                                                        row,
                                                                        index,
                                                                    )

                                                                    : (
                                                                        value as ReactNode
                                                                    )
                                                        }

                                                    </EveTableCell>

                                                );

                                            },
                                        )}

                                    </EveTableRow>

                                );

                            },
                        )

                    )}

                </EveTableBody>
                
                </div>

                {/* ==================================================
                    PAGINAÇÃO
                ================================================== */}

                {table && (

                    <TablePagination

                        table={
                            table
                        }

                    />

                )}

            </EveTable>

        </div>

    );

};


export default EveDataTable;