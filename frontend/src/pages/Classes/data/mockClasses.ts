export interface ClassModel {
    id: number;
    name: string;
    course: string;
    teacher: string;
    period: "Manhã" | "Tarde" | "Noite";
    students: number;
    vacancies: number;
    status: "Ativa" | "Encerrada" | "Planejada";
}

export const mockClasses: ClassModel[] = [
    {
        id: 1,
        name: "ADS-1",
        course: "Análise e Desenvolvimento de Sistemas",
        teacher: "Carlos Henrique",
        period: "Noite",
        students: 34,
        vacancies: 40,
        status: "Ativa",
    },
    {
        id: 2,
        name: "ADS-2",
        course: "Análise e Desenvolvimento de Sistemas",
        teacher: "Fernanda Souza",
        period: "Noite",
        students: 32,
        vacancies: 40,
        status: "Ativa",
    },
    {
        id: 3,
        name: "DS-1",
        course: "Ciência de Dados",
        teacher: "Ricardo Oliveira",
        period: "Tarde",
        students: 29,
        vacancies: 35,
        status: "Ativa",
    },
    {
        id: 4,
        name: "ADM-1",
        course: "Administração",
        teacher: "Juliana Lima",
        period: "Manhã",
        students: 28,
        vacancies: 35,
        status: "Encerrada",
    },
    {
        id: 1,
        name: "ADS-1",
        course: "Análise e Desenvolvimento de Sistemas",
        teacher: "Carlos Henrique",
        period: "Noite",
        students: 34,
        vacancies: 40,
        status: "Ativa",
    },
    {
        id: 2,
        name: "ADS-2",
        course: "Análise e Desenvolvimento de Sistemas",
        teacher: "Fernanda Souza",
        period: "Noite",
        students: 32,
        vacancies: 40,
        status: "Ativa",
    },
    {
        id: 3,
        name: "DS-1",
        course: "Ciência de Dados",
        teacher: "Ricardo Oliveira",
        period: "Tarde",
        students: 29,
        vacancies: 35,
        status: "Ativa",
    },
    {
        id: 4,
        name: "ADM-1",
        course: "Administração",
        teacher: "Juliana Lima",
        period: "Manhã",
        students: 28,
        vacancies: 35,
        status: "Encerrada",
    },
    {
        id: 3,
        name: "DS-1",
        course: "Ciência de Dados",
        teacher: "Ricardo Oliveira",
        period: "Tarde",
        students: 29,
        vacancies: 35,
        status: "Ativa",
    },
    {
        id: 4,
        name: "ADM-1",
        course: "Administração",
        teacher: "Juliana Lima",
        period: "Manhã",
        students: 28,
        vacancies: 35,
        status: "Encerrada",
    },
    {
        id: 4,
        name: "ADM-1",
        course: "Administração",
        teacher: "Juliana Lima",
        period: "Manhã",
        students: 28,
        vacancies: 35,
        status: "Encerrada",
    }
];