export type ReportsStatus =
    | "Excelente"
    | "Monitorar"
    | "Atenção"
    | "Crítico";

export interface ReportsModel {

    id: number;

    student: string;

    course: string;

    classroom: string;

    teacher: string;

    subject: string;

    date: string;

    attendance: number;

    absences: number;

    frequency: number;

    status: ReportsStatus;

}

export const mockGrades: ReportsModel[] = [

    {
        id: 1,
        student: "João Pedro Santos",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        date: "30/07/2026",
        attendance: 142,
        absences: 38,
        frequency: 78.9,
        status: "Atenção",
    },

    {
        id: 2,
        student: "Maria Eduarda",
        course: "Ciência de Dados",
        classroom: "2º CD",
        teacher: "Juliana Lima",
        subject: "Machine Learning",
        date: "30/07/2026",
        attendance: 171,
        absences: 9,
        frequency: 95,
        status: "Excelente",
    },

    {
        id: 3,
        student: "Carlos Henrique",
        course: "Administração",
        classroom: "1º ADM",
        teacher: "Carlos Oliveira",
        subject: "Gestão Empresarial",
        date: "30/07/2026",
        attendance: 126,
        absences: 54,
        frequency: 70,
        status: "Crítico",
    },

    {
        id: 4,
        student: "Ana Carolina",
        course: "Ciência de Dados",
        classroom: "3º CD",
        teacher: "Raphael Santos",
        subject: "Power BI",
        date: "30/07/2026",
        attendance: 160,
        absences: 20,
        frequency: 88.9,
        status: "Monitorar",
    },

    {
        id: 5,
        student: "Lucas Ferreira",
        course: "Desenvolvimento de Sistemas",
        classroom: "2º DS",
        teacher: "Fernanda Alves",
        subject: "Banco de Dados",
        date: "30/07/2026",
        attendance: 173,
        absences: 7,
        frequency: 96.1,
        status: "Excelente",
    },

    {
        id: 6,
        student: "Amanda Souza",
        course: "Administração",
        classroom: "2º ADM",
        teacher: "Carlos Oliveira",
        subject: "Marketing",
        date: "30/07/2026",
        attendance: 134,
        absences: 46,
        frequency: 74.4,
        status: "Atenção",
    },

    {
        id: 7,
        student: "Gabriel Lima",
        course: "Ciência de Dados",
        classroom: "1º CD",
        teacher: "Juliana Lima",
        subject: "Python",
        date: "30/07/2026",
        attendance: 176,
        absences: 4,
        frequency: 97.8,
        status: "Excelente",
    },

    {
        id: 8,
        student: "Beatriz Martins",
        course: "Desenvolvimento de Sistemas",
        classroom: "1º DS",
        teacher: "Raphael Santos",
        subject: "Algoritmos",
        date: "30/07/2026",
        attendance: 148,
        absences: 32,
        frequency: 82.2,
        status: "Monitorar",
    },

];