export interface Student {
    id: number;
    name: string;
    course: string;
    classroom: string;
    year: number;
    bimester: number;
    period: string;
    attendance: number;
    average: number;
    status: string;
    alerts: number;
    enrollmentDate: string;
}

export const students: Student[] = [
    {
        id: 1,
        name: "João Pedro Silva",
        course: "ADS",
        classroom: "ADS-2",
        year: 2026,
        bimester: 1,
        period: "Manhã",
        attendance: 94,
        average: 8.7,
        status: "Ativo",
        alerts: 2,
        enrollmentDate: "2023-09-01",
    },
    {
        id: 2,
        name: "Maria Souza",
        course: "Data Science",
        classroom: "DS-1",
        year: 2026,
        bimester: 2,
        period: "Tarde",
        attendance: 98,
        average: 9.5,
        status: "Excelente",
        alerts: 0,
        enrollmentDate: "2023-09-01",
    },
    {
        id: 3,
        name: "Carlos Henrique",
        course: "Administração",
        classroom: "ADM-1",
        year: 2025,
        bimester: 3,
        period: "Noite",
        attendance: 72,
        average: 6.3,
        status: "Acompanhamento",
        alerts: 3,
        enrollmentDate: "2026-10-01",
    },
    {
        id: 4,
        name: "Ana Clara",
        course: "ADS",
        classroom: "ADS-1",
        year: 2026,
        bimester: 1,
        period: "Tarde",
        attendance: 89,
        average: 8.1,
        status: "Ativo",
        alerts: 1,
        enrollmentDate: "2026-10-01",
    },
    {
        id: 5,
        name: "Lucas Ferreira",
        course: "Data Science",
        classroom: "DS-2",
        year: 2025,
        bimester: 4,
        period: "Noite",
        attendance: 61,
        average: 5.8,
        status: "Em risco",
        alerts: 5,
        enrollmentDate: "2026-10-01",
    },
    {
        id: 6,
        name: "Fernanda Alves",
        course: "ADS",
        classroom: "ADS-3",
        year: 2026,
        bimester: 2,
        period: "Manhã",
        attendance: 97,
        average: 9.7,
        status: "Excelente",
        alerts: 0,
        enrollmentDate: "2026-10-01",
    },
];