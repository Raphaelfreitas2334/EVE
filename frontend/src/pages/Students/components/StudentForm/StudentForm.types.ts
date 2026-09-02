import type { StudentFormErrors } from "./StudentForm.validation";

export interface StudentFormData {
  // Dados pessoais
  fullName: string;

  email: string;

  phone: string;

  birthDate: string;

  // Dados acadêmicos
  registration: string;

  course: string;

  classroom: string;

  // Situação
  status: string;

  observations: string;
}

export interface StudentFormProps {
  student: StudentFormData;

  errors: StudentFormErrors;

  onChange: (
    field: keyof StudentFormData,

    value: string,
  ) => void;
}
