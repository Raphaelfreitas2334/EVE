export interface TableState<T = unknown> {

    rows: T[];

    currentPage: number;

    totalPages: number;

    totalItems: number;

    pageSize: number;

    startItem: number;

    endItem: number;

    hasPrevious: boolean;

    hasNext: boolean;

    setCurrentPage: (page: number) => void;

    setPageSize: (size: number) => void;

}