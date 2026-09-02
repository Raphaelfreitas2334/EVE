import type { ReactNode } from "react";

import type { TableState } from "../TablePagination";

/**
 * Linha genérica.
 */
export type EveDataTableRow = Record<string, unknown>;

export interface EveDataTableColumn<T = EveDataTableRow> {

    key: keyof T | string;

    title: ReactNode;

    width?: string;

    align?: "left" | "center" | "right";

    hidden?: boolean;

    sortable?: boolean;

    render?: (
        row: T,
        rowIndex: number,
    ) => ReactNode;

}

export interface EveDataTableProps<T = EveDataTableRow> {

    rowKey?: keyof T | string;

    columns: EveDataTableColumn<T>[];

    rows: T[];

    table?: TableState<T>;

    hoverRows?: boolean;

    loading?: boolean;

    actions?: (
        row: T,
        rowIndex: number,
    ) => ReactNode;

    actionsTitle?: ReactNode;

    actionsWidth?: string;

    emptyTitle?: string;

    emptyDescription?: string;

    emptyIcon?: ReactNode;

    emptyAction?: ReactNode;

}
