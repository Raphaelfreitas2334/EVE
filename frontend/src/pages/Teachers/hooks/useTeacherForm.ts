import { useState } from "react";
import type { TeachersFormData } from "../components/TeacherForm";
import {
  validateTeachersForm,
  type TeachersFormErrors,
} from "../components/TeacherForm/TeachersForm.validation";

const initialState: TeachersFormData = {
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

const useTeachersForm = () => {
  const [teachers, setTeachers] = useState<TeachersFormData>(initialState);

  const [errors, setErrors] = useState<TeachersFormErrors>({});

  const handleChange = (
    field: keyof TeachersFormData,

    value: string,
  ) => {
    setTeachers((previous) => ({
      ...previous,

      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,

      [field]: undefined,
    }));
  };

  const reset = () => {
    setTeachers(initialState);

    setErrors({});
  };

  const submit = async () => {
    const validationErrors = validateTeachersForm(teachers);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return false;
    }

    console.table(teachers);

    /*
            Futuramente:

            await studentService.create(student);
        */

    return true;
  };

  return {
    teachers,

    errors,

    handleChange,

    reset,

    submit,
  };
};

export default useTeachersForm;
