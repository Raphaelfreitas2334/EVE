import "./TeachersContext.css";

import EveSelect from "../../../../components/UI/Select";
import EveButton from "../../../../components/UI/Button";

import { RotateCcw } from "lucide-react";

interface TeachersContextProps {
    discipline: string;
    category: string;
    status: string;

    disciplineOptions: string[];
    categoryOptions: string[];
    statusOptions: string[];

    onDisciplineChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    onClearFilters: () => void;
}

const TeachersContext = ({
    discipline,
    category,
    status,
    disciplineOptions,
    categoryOptions,
    statusOptions,
    onDisciplineChange,
    onCategoryChange,
    onStatusChange,
    onClearFilters,
}: TeachersContextProps) => {
    return (
        <section className="teachers-context">
            <div className="teachers-context-header">
                <h3>Filtros</h3>

                <p>
                    Utilize os filtros abaixo para localizar professores rapidamente.
                </p>
            </div>

            <div className="teachers-context-filters">
                <EveSelect
                    label="Disciplina"
                    value={discipline}
                    placeholder="Selecione..."
                    options={[
                        { value: "", label: "Todas as disciplinas" },
                        ...disciplineOptions.map((item) => ({
                            value: item,
                            label: item,
                        })),
                    ]}
                    onChange={onDisciplineChange}
                />

                <EveSelect
                    label="Categoria"
                    value={category}
                    placeholder="Selecione..."
                    options={[
                        { value: "", label: "Todas as categorias" },
                        ...categoryOptions.map((item) => ({
                            value: item,
                            label: item,
                        })),
                    ]}
                    onChange={onCategoryChange}
                />

                <EveSelect
                    label="Status"
                    value={status}
                    placeholder="Selecione..."
                    options={[
                        { value: "", label: "Todos os status" },
                        ...statusOptions.map((item) => ({
                            value: item,
                            label: item,
                        })),
                    ]}
                    onChange={onStatusChange}
                />

                <EveButton
                    variant="outline"
                    onClick={onClearFilters}
                >
                    <RotateCcw size={18} />
                    Limpar filtros
                </EveButton>
            </div>
        </section>
    );
};

export default TeachersContext;