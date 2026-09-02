import type { StudentFormData } from "./StudentForm.types";

export interface StudentFormErrors {
  fullName?: string;

  email?: string;

  phone?: string;

  birthDate?: string;

  registration?: string;

  course?: string;

  classroom?: string;

  status?: string;

  observations?: string;
}

export function validateStudentForm(data: StudentFormData): StudentFormErrors {
  const errors: StudentFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Informe o nome do aluno.";
  }

  if (!data.email.trim()) {
    errors.email = "Informe o e-mail.";
  }

  if (!data.registration.trim()) {
    errors.registration = "Informe a matrícula.";
  }

  if (!data.course.trim()) {
    errors.course = "Selecione um curso.";
  }

  if (!data.classroom.trim()) {
    errors.classroom = "Selecione uma turma.";
  }

  return errors;
}
