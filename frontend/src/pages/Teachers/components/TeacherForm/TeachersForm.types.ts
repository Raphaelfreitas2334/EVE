import type { TeachersFormErrors } from "./TeachersForm.validation";

export interface TeachersFormData {
  // Dados pessoais
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;

  // Dados profissionais
  registration: string;
  discipline: string;
  category: string;
  workload: string;
  admissionDate: string;

  // Situação
  status: string;
  observations: string;
}

export interface TeachersFormProps {
  teachers: TeachersFormData;

  errors: TeachersFormErrors;

  onChange: (field: keyof TeachersFormData, value: string) => void;
}
