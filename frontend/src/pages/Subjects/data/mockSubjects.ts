export interface SubjectsModel {

    id: number;

    name: string;

    course: string;

    teacher: string;

    workload: number;

    period: "Manhã" | "Tarde" | "Noite";

    students: number;

    vacancies: number;

    status: "Ativa" | "Planejada" | "Encerrada";

}

export const mockSubjects: SubjectsModel[] = [

    {
        id: 1,
        name: "Algoritmos e Lógica de Programação",
        course: "ADS",
        teacher: "Carlos Henrique",
        workload: 80,
        period: "Noite",
        students: 34,
        vacancies: 40,
        status: "Ativa",
    },

    {
        id: 2,
        name: "Banco de Dados",
        course: "ADS",
        teacher: "Fernanda Souza",
        workload: 60,
        period: "Noite",
        students: 32,
        vacancies: 40,
        status: "Ativa",
    },

    {
        id: 3,
        name: "Programação Front-End",
        course: "ADS",
        teacher: "Lucas Almeida",
        workload: 80,
        period: "Noite",
        students: 31,
        vacancies: 40,
        status: "Planejada",
    },

    {
        id: 4,
        name: "Machine Learning",
        course: "Ciência de Dados",
        teacher: "Ricardo Oliveira",
        workload: 120,
        period: "Tarde",
        students: 29,
        vacancies: 35,
        status: "Ativa",
    },

    {
        id: 5,
        name: "Análise Exploratória de Dados",
        course: "Ciência de Dados",
        teacher: "Mariana Costa",
        workload: 80,
        period: "Tarde",
        students: 30,
        vacancies: 35,
        status: "Ativa",
    },

    {
        id: 6,
        name: "Power BI",
        course: "Ciência de Dados",
        teacher: "Eduardo Martins",
        workload: 40,
        period: "Tarde",
        students: 28,
        vacancies: 35,
        status: "Ativa",
    },

    {
        id: 7,
        name: "Gestão Financeira",
        course: "Administração",
        teacher: "Juliana Lima",
        workload: 60,
        period: "Manhã",
        students: 28,
        vacancies: 35,
        status: "Encerrada",
    },

    {
        id: 8,
        name: "Marketing",
        course: "Administração",
        teacher: "Patrícia Gomes",
        workload: 60,
        period: "Manhã",
        students: 27,
        vacancies: 35,
        status: "Ativa",
    },

    {
        id: 9,
        name: "Empreendedorismo",
        course: "Administração",
        teacher: "André Ferreira",
        workload: 40,
        period: "Manhã",
        students: 26,
        vacancies: 35,
        status: "Planejada",
    },

    {
        id: 10,
        name: "Inglês Técnico",
        course: "Cursos Integrados",
        teacher: "Camila Rocha",
        workload: 40,
        period: "Noite",
        students: 33,
        vacancies: 40,
        status: "Ativa",
    }

];