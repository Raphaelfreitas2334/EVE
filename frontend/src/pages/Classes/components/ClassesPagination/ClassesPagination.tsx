import "./ClassesPagination.css";

import EveSelect from "../../../../components/UI/Select";

interface ClassesPaginationProps {

    table: {

        currentPage: number;

        totalPages: number;

        totalItems: number;

        pageSize: number;

        setCurrentPage: (page: number) => void;

        setPageSize: (size: number) => void;

    };

}

const ClassesPagination = ({
    table,
}: ClassesPaginationProps) => {

    const start =
        table.totalItems === 0
            ? 0
            : (table.currentPage - 1) * table.pageSize + 1;

    const end = Math.min(
        table.currentPage * table.pageSize,
        table.totalItems
    );

    const pages = [];

    for (let i = 1; i <= table.totalPages; i++) {

        pages.push(i);

    }

    return (

        <footer className="classes-pagination">

            <span className="classes-pagination-info">

                Mostrando {start} a {end} de {table.totalItems} turmas

            </span>

            <div className="classes-pagination-controls">

                <button
                    disabled={table.currentPage === 1}
                    onClick={() =>
                        table.setCurrentPage(table.currentPage - 1)
                    }
                >

                    ‹

                </button>

                {pages.map((page) => (

                    <button
                        key={page}
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

                ))}

                <button
                    disabled={
                        table.currentPage === table.totalPages
                    }
                    onClick={() =>
                        table.setCurrentPage(table.currentPage + 1)
                    }
                >

                    ›

                </button>

            </div>

            <div className="classes-pagination-size">

                <EveSelect
                    value={table.pageSize.toString()}
                    placeholder="Itens"
                    options={[
                        { value: "5", label: "5 por página" },
                        { value: "10", label: "10 por página" },
                        { value: "20", label: "20 por página" },
                        { value: "50", label: "50 por página" },
                    ]}
                    onChange={(e) =>
                        table.setPageSize(Number(e.target.value))
                    }
                />

            </div>

        </footer>

    );

};

export default ClassesPagination;