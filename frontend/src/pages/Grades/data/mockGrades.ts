export type GradesStatus =
    | "Excelente"
    | "Bom"
    | "Atenção"
    | "Recuperação";

export interface GradesModel {

    id: number;

    name: string;

    course: string;

    classroom: string;

    teacher: string;

    subject: string;

    period: "Manhã" | "Tarde" | "Noite";

    grade1: number;

    grade2: number;

    grade3: number;

    grade4: number;

    average: number;

    status: GradesStatus;

    date: string;

}

export const mockGrades: GradesModel[] = [

    // =========================================================
    // DESENVOLVIMENTO DE SISTEMAS - 3º DS
    // =========================================================

    {
        id: 1,
        name: "Ana Beatriz Oliveira",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        period: "Manhã",
        grade1: 8.5,
        grade2: 9.0,
        grade3: 8.7,
        grade4: 9.2,
        average: 8.85,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 2,
        name: "Bruno Henrique Silva",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        period: "Manhã",
        grade1: 7.5,
        grade2: 8.0,
        grade3: 7.8,
        grade4: 8.2,
        average: 7.88,
        status: "Bom",
        date: "31/08/2026",
    },

    {
        id: 3,
        name: "Carlos Eduardo Santos",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        period: "Manhã",
        grade1: 6.0,
        grade2: 6.8,
        grade3: 7.2,
        grade4: 7.0,
        average: 6.75,
        status: "Atenção",
        date: "31/08/2026",
    },

    {
        id: 4,
        name: "Daniela Ferreira Costa",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        period: "Manhã",
        grade1: 9.0,
        grade2: 8.8,
        grade3: 9.2,
        grade4: 9.5,
        average: 9.13,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 5,
        name: "Eduardo Martins Souza",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        period: "Manhã",
        grade1: 5.5,
        grade2: 6.0,
        grade3: 5.8,
        grade4: 6.2,
        average: 5.88,
        status: "Recuperação",
        date: "31/08/2026",
    },

    {
        id: 6,
        name: "Fernanda Alves Rocha",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        period: "Manhã",
        grade1: 8.0,
        grade2: 8.5,
        grade3: 8.2,
        grade4: 8.7,
        average: 8.35,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 7,
        name: "Gabriel Lima Pereira",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        period: "Manhã",
        grade1: 7.0,
        grade2: 7.5,
        grade3: 7.3,
        grade4: 7.8,
        average: 7.40,
        status: "Bom",
        date: "31/08/2026",
    },

    {
        id: 8,
        name: "Helena Cristina Ramos",
        course: "Desenvolvimento de Sistemas",
        classroom: "3º DS",
        teacher: "Raphael Santos",
        subject: "Programação Front-End",
        period: "Manhã",
        grade1: 6.5,
        grade2: 6.2,
        grade3: 6.8,
        grade4: 7.0,
        average: 6.63,
        status: "Atenção",
        date: "31/08/2026",
    },

    // =========================================================
    // DESENVOLVIMENTO DE SISTEMAS - 2º DS
    // =========================================================

    {
        id: 9,
        name: "Igor Almeida Santos",
        course: "Desenvolvimento de Sistemas",
        classroom: "2º DS",
        teacher: "Mariana Costa",
        subject: "Banco de Dados",
        period: "Tarde",
        grade1: 8.2,
        grade2: 8.5,
        grade3: 8.8,
        grade4: 9.0,
        average: 8.63,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 10,
        name: "Juliana Mendes Oliveira",
        course: "Desenvolvimento de Sistemas",
        classroom: "2º DS",
        teacher: "Mariana Costa",
        subject: "Banco de Dados",
        period: "Tarde",
        grade1: 7.8,
        grade2: 7.5,
        grade3: 8.0,
        grade4: 8.3,
        average: 7.90,
        status: "Bom",
        date: "31/08/2026",
    },

    {
        id: 11,
        name: "Lucas Gabriel Souza",
        course: "Desenvolvimento de Sistemas",
        classroom: "2º DS",
        teacher: "Mariana Costa",
        subject: "Banco de Dados",
        period: "Tarde",
        grade1: 6.2,
        grade2: 6.8,
        grade3: 6.5,
        grade4: 6.9,
        average: 6.60,
        status: "Atenção",
        date: "31/08/2026",
    },

    {
        id: 12,
        name: "Mariana Vitória Santos",
        course: "Desenvolvimento de Sistemas",
        classroom: "2º DS",
        teacher: "Mariana Costa",
        subject: "Banco de Dados",
        period: "Tarde",
        grade1: 9.2,
        grade2: 9.0,
        grade3: 9.4,
        grade4: 9.6,
        average: 9.30,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 13,
        name: "Nicolas Rodrigues Lima",
        course: "Desenvolvimento de Sistemas",
        classroom: "2º DS",
        teacher: "Mariana Costa",
        subject: "Banco de Dados",
        period: "Tarde",
        grade1: 5.8,
        grade2: 6.0,
        grade3: 5.5,
        grade4: 6.2,
        average: 5.88,
        status: "Recuperação",
        date: "31/08/2026",
    },

    {
        id: 14,
        name: "Olivia Martins Alves",
        course: "Desenvolvimento de Sistemas",
        classroom: "2º DS",
        teacher: "Mariana Costa",
        subject: "Banco de Dados",
        period: "Tarde",
        grade1: 7.5,
        grade2: 8.0,
        grade3: 7.8,
        grade4: 8.5,
        average: 7.95,
        status: "Bom",
        date: "31/08/2026",
    },

    // =========================================================
    // CIÊNCIA DE DADOS - 3º CD
    // =========================================================

    {
        id: 15,
        name: "Paulo Henrique Souza",
        course: "Ciência de Dados",
        classroom: "3º CD",
        teacher: "Raphael Santos",
        subject: "Aprendizado de Máquina",
        period: "Manhã",
        grade1: 8.8,
        grade2: 9.0,
        grade3: 9.2,
        grade4: 9.5,
        average: 9.13,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 16,
        name: "Rafael Augusto Lima",
        course: "Ciência de Dados",
        classroom: "3º CD",
        teacher: "Raphael Santos",
        subject: "Aprendizado de Máquina",
        period: "Manhã",
        grade1: 7.8,
        grade2: 8.2,
        grade3: 8.0,
        grade4: 8.5,
        average: 8.13,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 17,
        name: "Sabrina Oliveira Costa",
        course: "Ciência de Dados",
        classroom: "3º CD",
        teacher: "Raphael Santos",
        subject: "Aprendizado de Máquina",
        period: "Manhã",
        grade1: 7.0,
        grade2: 7.4,
        grade3: 7.8,
        grade4: 8.0,
        average: 7.55,
        status: "Bom",
        date: "31/08/2026",
    },

    {
        id: 18,
        name: "Thiago Martins Silva",
        course: "Ciência de Dados",
        classroom: "3º CD",
        teacher: "Raphael Santos",
        subject: "Aprendizado de Máquina",
        period: "Manhã",
        grade1: 6.0,
        grade2: 6.5,
        grade3: 6.8,
        grade4: 6.2,
        average: 6.38,
        status: "Atenção",
        date: "31/08/2026",
    },

    {
        id: 19,
        name: "Valentina Rodrigues",
        course: "Ciência de Dados",
        classroom: "3º CD",
        teacher: "Raphael Santos",
        subject: "Aprendizado de Máquina",
        period: "Manhã",
        grade1: 9.0,
        grade2: 9.3,
        grade3: 9.1,
        grade4: 9.7,
        average: 9.28,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 20,
        name: "William Ferreira",
        course: "Ciência de Dados",
        classroom: "3º CD",
        teacher: "Raphael Santos",
        subject: "Aprendizado de Máquina",
        period: "Manhã",
        grade1: 5.5,
        grade2: 5.8,
        grade3: 6.0,
        grade4: 5.9,
        average: 5.80,
        status: "Recuperação",
        date: "31/08/2026",
    },

    // =========================================================
    // ADMINISTRAÇÃO - 3º ADM
    // =========================================================

    {
        id: 21,
        name: "Alice Fernanda Martins",
        course: "Administração",
        classroom: "3º ADM",
        teacher: "Carla Mendes",
        subject: "Gestão de Pessoas",
        period: "Noite",
        grade1: 8.0,
        grade2: 8.5,
        grade3: 8.7,
        grade4: 9.0,
        average: 8.55,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 22,
        name: "Beatriz Cristina Alves",
        course: "Administração",
        classroom: "3º ADM",
        teacher: "Carla Mendes",
        subject: "Gestão de Pessoas",
        period: "Noite",
        grade1: 7.2,
        grade2: 7.5,
        grade3: 7.8,
        grade4: 8.0,
        average: 7.63,
        status: "Bom",
        date: "31/08/2026",
    },

    {
        id: 23,
        name: "Caio Vinicius Rocha",
        course: "Administração",
        classroom: "3º ADM",
        teacher: "Carla Mendes",
        subject: "Gestão de Pessoas",
        period: "Noite",
        grade1: 6.5,
        grade2: 6.0,
        grade3: 6.8,
        grade4: 7.0,
        average: 6.58,
        status: "Atenção",
        date: "31/08/2026",
    },

    {
        id: 24,
        name: "Débora Cristina Souza",
        course: "Administração",
        classroom: "3º ADM",
        teacher: "Carla Mendes",
        subject: "Gestão de Pessoas",
        period: "Noite",
        grade1: 9.0,
        grade2: 9.2,
        grade3: 8.8,
        grade4: 9.4,
        average: 9.10,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 25,
        name: "Enzo Gabriel Oliveira",
        course: "Administração",
        classroom: "3º ADM",
        teacher: "Carla Mendes",
        subject: "Gestão de Pessoas",
        period: "Noite",
        grade1: 5.8,
        grade2: 6.2,
        grade3: 5.5,
        grade4: 6.0,
        average: 5.88,
        status: "Recuperação",
        date: "31/08/2026",
    },

    {
        id: 26,
        name: "Gabriela Martins Costa",
        course: "Administração",
        classroom: "3º ADM",
        teacher: "Carla Mendes",
        subject: "Gestão de Pessoas",
        period: "Noite",
        grade1: 7.8,
        grade2: 8.0,
        grade3: 8.2,
        grade4: 8.4,
        average: 8.10,
        status: "Excelente",
        date: "31/08/2026",
    },

    // =========================================================
    // CIÊNCIA DE DADOS - 2º CD
    // =========================================================

    {
        id: 27,
        name: "Henrique Augusto Silva",
        course: "Ciência de Dados",
        classroom: "2º CD",
        teacher: "Fernanda Alves",
        subject: "Análise Exploratória de Dados",
        period: "Tarde",
        grade1: 8.5,
        grade2: 8.8,
        grade3: 8.2,
        grade4: 8.9,
        average: 8.60,
        status: "Excelente",
        date: "31/08/2026",
    },

    {
        id: 28,
        name: "Isabela Rodrigues Santos",
        course: "Ciência de Dados",
        classroom: "2º CD",
        teacher: "Fernanda Alves",
        subject: "Análise Exploratória de Dados",
        period: "Tarde",
        grade1: 7.0,
        grade2: 7.5,
        grade3: 7.2,
        grade4: 7.8,
        average: 7.38,
        status: "Bom",
        date: "31/08/2026",
    },

    {
        id: 29,
        name: "João Victor Almeida",
        course: "Ciência de Dados",
        classroom: "2º CD",
        teacher: "Fernanda Alves",
        subject: "Análise Exploratória de Dados",
        period: "Tarde",
        grade1: 6.0,
        grade2: 6.5,
        grade3: 6.2,
        grade4: 6.8,
        average: 6.38,
        status: "Atenção",
        date: "31/08/2026",
    },

    {
        id: 30,
        name: "Larissa Vitória Pereira",
        course: "Ciência de Dados",
        classroom: "2º CD",
        teacher: "Fernanda Alves",
        subject: "Análise Exploratória de Dados",
        period: "Tarde",
        grade1: 9.2,
        grade2: 9.0,
        grade3: 9.5,
        grade4: 9.3,
        average: 9.25,
        status: "Excelente",
        date: "31/08/2026",
    },

];