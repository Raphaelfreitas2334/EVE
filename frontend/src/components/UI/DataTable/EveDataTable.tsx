import "./EveDataTable.css";

import {
    useMemo,
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
} from "../Table";

import type {
    EveDataTableColumn,
    EveDataTableProps,
} from "./types";

const EveDataTable = <T extends object>({

    rowKey = "id",

    columns,

    rows,

    table,

    hoverRows = true,

    loading = false,

    actions,

    actionsTitle = "Ações",

    actionsWidth = "120px",

    emptyTitle = "Nenhum registro encontrado",

    emptyDescription = "Não existem registros para exibir.",

    emptyIcon,

    emptyAction,

}: EveDataTableProps<T>) => {

    /*
    |--------------------------------------------------------------------------
    | Colunas visíveis
    |--------------------------------------------------------------------------
    */

    const visibleColumns = useMemo(

        () =>

            columns.filter(

                column => !column.hidden,

            ),

        [columns],

    );

    /*
    |--------------------------------------------------------------------------
    | Colunas finais
    |--------------------------------------------------------------------------
    */

    const finalColumns = useMemo<

        EveDataTableColumn<T>[]

    >(() => {

        if (!actions) {

            return visibleColumns;

        }

        return [

            ...visibleColumns,

            {

                key: "__actions",

                title: actionsTitle,

                width: actionsWidth,

                align: "center",

            },

        ];

    }, [

        visibleColumns,

        actions,

        actionsTitle,

        actionsWidth,

    ]);

    /*
    |--------------------------------------------------------------------------
    | Grid
    |--------------------------------------------------------------------------
    */

    const gridTemplateColumns = useMemo(

        () =>

            finalColumns

                .map(

                    column =>

                        column.width ?? "minmax(0, 1fr)",

                )

                .join(" "),

        [finalColumns],

    );

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (

            <div className="eve-data-table">

                <EveTable>

                    <EmptyState

                        title="Carregando..."

                        description="Aguarde enquanto carregamos os dados."

                    />

                </EveTable>

            </div>

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Tabela
    |--------------------------------------------------------------------------
    */

    return (

        <div className="eve-data-table">

            <EveTable>

                {/* ==========================================================
                    HEADER
                ========================================================== */}

                <EveTableHeader>

                    <EveTableRow

                        hover={false}

                        columns={gridTemplateColumns}

                    >

                        {finalColumns.map(

                            column => (

                                <EveTableHead

                                    key={String(

                                        column.key,

                                    )}

                                    align={

                                        column.align

                                    }

                                >

                                    {column.title}

                                </EveTableHead>

                            ),

                        )}

                    </EveTableRow>

                </EveTableHeader>

                {/* ==========================================================
                    BODY
                ========================================================== */}

                <EveTableBody>

                    {rows.length === 0 ? (

                        <EmptyState

                            icon={emptyIcon}

                            title={emptyTitle}

                            description={

                                emptyDescription

                            }

                            action={emptyAction}

                        />

                    ) : (

                        rows.map(

                            (row, index) => {

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

                                        key={String(key)}

                                        hover={hoverRows}

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

                                                        key={String(

                                                            column.key,

                                                        )}

                                                        align={

                                                            column.align

                                                        }

                                                    >

                                                        {column.key ===

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

                                                              : (value as ReactNode)}

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

                {/* ==========================================================
                    PAGINAÇÃO
                ========================================================== */}

                {table && (

                    <TablePagination

                        table={table}

                    />

                )}

            </EveTable>

            </div>

    );

};

export default EveDataTable;