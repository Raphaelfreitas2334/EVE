import { useState } from "react";

import type { StudentFormData } from "../components/StudentForm/StudentForm.types";

import {
  validateStudentForm,
  type StudentFormErrors,
} from "../components/StudentForm/StudentForm.validation";

const initialState: StudentFormData = {
  // Dados pessoais
  fullName: "",

  email: "",

  phone: "",

  birthDate: "",

  // Dados acadêmicos
  registration: "",

  course: "",

  classroom: "",

  // Situação
  status: "Ativo",

  observations: "",
};

const useStudentForm = () => {
  const [student, setStudent] = useState<StudentFormData>(initialState);

  const [errors, setErrors] = useState<StudentFormErrors>({});

  const handleChange = (
    field: keyof StudentFormData,

    value: string,
  ) => {
    setStudent((previous) => ({
      ...previous,

      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,

      [field]: undefined,
    }));
  };

  const reset = () => {
    setStudent(initialState);

    setErrors({});
  };

  const submit = async () => {
    const validationErrors = validateStudentForm(student);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return false;
    }

    console.table(student);

    /*
            Futuramente:

            await studentService.create(student);
        */

    return true;
  };

  return {
    student,

    errors,

    handleChange,

    reset,

    submit,
  };
};

export default useStudentForm;
