import type { TeachersFormData } from "./TeachersForm.types";

export interface TeachersFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  birthDate?: string;

  registration?: string;
  discipline?: string;
  category?: string;
  workload?: string;
  admissionDate?: string;

  status?: string;
  observations?: string;
}

export function validateTeachersForm(
  data: TeachersFormData,
): TeachersFormErrors {
  const errors: TeachersFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Informe o nome do professor.";
  }

  if (!data.email.trim()) {
    errors.email = "Informe o e-mail.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Informe o telefone.";
  }

  if (!data.registration.trim()) {
    errors.registration = "Informe a matrícula.";
  }

  if (!data.discipline.trim()) {
    errors.discipline = "Selecione uma disciplina.";
  }

  if (!data.category.trim()) {
    errors.category = "Selecione a categoria.";
  }

  if (!data.workload.trim()) {
    errors.workload = "Informe a carga horária.";
  }

  if (!data.admissionDate.trim()) {
    errors.admissionDate = "Informe a data de admissão.";
  }

  if (!data.status.trim()) {
    errors.status = "Selecione um status.";
  }

  return errors;
}
