import "./EveTableColumnSelector.css";

import {
    Check,
    Minus,
    Search,
} from "lucide-react";

import {
    useMemo,
    useState,
} from "react";

import type { CSSProperties } from "react";

import type { EveDataTableColumn } from "../DataTable";

interface EveTableColumnSelectorProps<T extends object> {
    columns: EveDataTableColumn<T>[];
    visibleKeys: string[];

    onToggleColumn: (
        key: string
    ) => void;

    onToggleAll: () => void;

    onReset: () => void;

    style?: CSSProperties;
}

const EveTableColumnSelector = <T extends object>({
    columns,
    visibleKeys,
    onToggleColumn,
    onToggleAll,
    onReset,
    style,
}: EveTableColumnSelectorProps<T>) => {

    const [search, setSearch] = useState("");

    const filteredColumns = useMemo(() => {

        const term = search
            .trim()
            .toLowerCase();

        if (!term) {
            return columns;
        }

        return columns.filter((column) =>
            String(column.title)
                .toLowerCase()
                .includes(term)
        );

    }, [columns, search]);

    const visibleCount = columns.filter(
        (column) =>
            visibleKeys.includes(
                String(column.key)
            )
    ).length;

    const allVisible =
        columns.length > 0 &&
        visibleCount === columns.length;

    const noneVisible =
        visibleCount === 0;

    const partiallyVisible =
        !allVisible &&
        !noneVisible;

    return (
        <div
            className="eve-table-column-selector"
            style={style}
            role="dialog"
            aria-label="Selecionar colunas"
        >

            {/* PESQUISA */}

            <div className="eve-table-column-selector-search">

                <Search
                    size={19}
                    strokeWidth={2}
                />

                <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                        setSearch(
                            event.target.value
                        )
                    }
                    placeholder="Pesquisar"
                    autoFocus
                />

            </div>


            {/* LISTA */}

            <div className="eve-table-column-selector-list">

                {filteredColumns.map((column) => {

                    const key =
                        String(column.key);

                    const checked =
                        visibleKeys.includes(key);

                    return (
                        <button
                            key={key}
                            type="button"
                            className={`
                                eve-table-column-selector-item
                                ${checked ? "is-checked" : ""}
                            `}
                            onClick={() =>
                                onToggleColumn(key)
                            }
                        >

                            <span
                                className={`
                                    eve-table-column-checkbox
                                    ${checked ? "checked" : ""}
                                `}
                            >
                                {checked && (
                                    <Check
                                        size={16}
                                        strokeWidth={3}
                                    />
                                )}
                            </span>

                            <span className="eve-table-column-label">
                                {column.title}
                            </span>

                        </button>
                    );
                })}

                {filteredColumns.length === 0 && (
                    <div className="eve-table-column-selector-empty">
                        Nenhuma coluna encontrada.
                    </div>
                )}

            </div>


            {/* FOOTER */}

            <div className="eve-table-column-selector-footer">

                <button
                    type="button"
                    className="eve-table-column-selector-all"
                    onClick={onToggleAll}
                >

                    <span
                        className={`
                            eve-table-column-checkbox
                            ${
                                allVisible ||
                                partiallyVisible
                                    ? "checked"
                                    : ""
                            }
                        `}
                    >

                        {allVisible && (
                            <Check
                                size={16}
                                strokeWidth={3}
                            />
                        )}

                        {partiallyVisible && (
                            <Minus
                                size={16}
                                strokeWidth={3}
                            />
                        )}

                    </span>

                    <span>
                        Mostrar/Ocultar todas
                    </span>

                </button>


                <button
                    type="button"
                    className="eve-table-column-selector-reset"
                    onClick={onReset}
                >
                    RESET
                </button>

            </div>

        </div>
    );
};

export default EveTableColumnSelector;