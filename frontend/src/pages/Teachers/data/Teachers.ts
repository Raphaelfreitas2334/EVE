export interface Teacher {
  id: number;

  // Dados pessoais
  fullName: string;
  email: string;
  phone: string;

  // Dados profissionais
  registration: string;
  discipline: string;
  category: string;
  workload: number;

  // Situação
  status: "Ativo" | "Licença" | "Afastado" | "Férias";

  admissionDate: string;
}

export const teachers: Teacher[] = [
  {
    id: 1,
    fullName: "Raphael Santos",
    email: "raphael.santos@eve.com",
    phone: "(11) 99999-1001",
    registration: "PRF0001",
    discipline: "Programação Front-End",
    category: "PAEET",
    workload: 28,
    status: "Ativo",
    admissionDate: "2025-02-03",
  },

  {
    id: 2,
    fullName: "Ana Oliveira",
    email: "ana.oliveira@eve.com",
    phone: "(11) 99999-1002",
    registration: "PRF0002",
    discipline: "Banco de Dados",
    category: "PAEET",
    workload: 24,
    status: "Ativo",
    admissionDate: "2024-08-12",
  },

  {
    id: 3,
    fullName: "Carlos Mendes",
    email: "carlos.mendes@eve.com",
    phone: "(11) 99999-1003",
    registration: "PRF0003",
    discipline: "Ciência de Dados",
    category: "Categoria O",
    workload: 32,
    status: "Licença",
    admissionDate: "2023-03-15",
  },

  {
    id: 4,
    fullName: "Fernanda Lima",
    email: "fernanda.lima@eve.com",
    phone: "(11) 99999-1004",
    registration: "PRF0004",
    discipline: "Desenvolvimento Web",
    category: "Efetivo",
    workload: 40,
    status: "Ativo",
    admissionDate: "2021-06-08",
  },

  {
    id: 5,
    fullName: "Juliana Costa",
    email: "juliana.costa@eve.com",
    phone: "(11) 99999-1005",
    registration: "PRF0005",
    discipline: "Análise de Sistemas",
    category: "Categoria O",
    workload: 20,
    status: "Férias",
    admissionDate: "2022-02-20",
  },

  {
    id: 6,
    fullName: "Roberto Almeida",
    email: "roberto.almeida@eve.com",
    phone: "(11) 99999-1006",
    registration: "PRF0006",
    discipline: "Redes de Computadores",
    category: "PAEET",
    workload: 36,
    status: "Afastado",
    admissionDate: "2020-09-10",
  },
];
