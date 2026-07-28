import "./TablePagination.css";

import EveSelect from "../Select";

import type { TableState } from "./types";

interface TablePaginationProps<T = unknown> {
    table: TableState<T>;
}

const TablePagination = <T,>({
    table,
}: TablePaginationProps<T>) => {

    const getPages = (): (number | "...")[] => {

        const total = table.totalPages;
        const current = table.currentPage;

        if (total <= 7) {

            return Array.from(
                { length: total },
                (_, index) => index + 1
            );

        }

        if (current <= 4) {

            return [1, 2, 3, 4, 5, "...", total];

        }

        if (current >= total - 3) {

            return [
                1,
                "...",
                total - 4,
                total - 3,
                total - 2,
                total - 1,
                total,
            ];

        }

        return [
            1,
            "...",
            current - 1,
            current,
            current + 1,
            "...",
            total,
        ];

    };

    return (

        <footer className="eve-table-pagination">

            <div className="eve-table-pagination-info">

                Mostrando

                <strong>{table.startItem}</strong>

                a

                <strong>{table.endItem}</strong>

                de

                <strong>{table.totalItems}</strong>

                registros

            </div>

            <div className="eve-table-pagination-pages">

                <button
                    type="button"
                    disabled={!table.hasPrevious}
                    onClick={() =>
                        table.setCurrentPage(table.currentPage - 1)
                    }
                >
                    ←
                </button>

                {getPages().map((page, index) => {

                    if (page === "...") {

                        return (

                            <span
                                key={index}
                                className="pagination-dots"
                            >

                                ...

                            </span>

                        );

                    }

                    return (

                        <button
                            key={page}
                            type="button"
                            className={
                                page === table.currentPage
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                table.setCurrentPage(page)
                            }
                        >

                            {page}

                        </button>

                    );

                })}

                <button
                    type="button"
                    disabled={!table.hasNext}
                    onClick={() =>
                        table.setCurrentPage(table.currentPage + 1)
                    }
                >
                    →
                </button>

            </div>

            <div className="eve-table-pagination-size">

                <EveSelect
                    value={table.pageSize.toString()}
                    placeholder="Itens por página"
                    options={[
                        {
                            value: "5",
                            label: "5 por página",
                        },
                        {
                            value: "10",
                            label: "10 por página",
                        },
                        {
                            value: "20",
                            label: "20 por página",
                        },
                        {
                            value: "50",
                            label: "50 por página",
                        },
                    ]}
                    onChange={(event) =>
                        table.setPageSize(
                            Number(event.target.value)
                        )
                    }
                />

            </div>

        </footer>

    );

};

export default TablePagination;