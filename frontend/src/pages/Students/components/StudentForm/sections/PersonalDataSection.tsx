import EveInput from "../../../../../components/UI/Input";

import type { StudentFormData } from "../StudentForm.types";

import type { StudentFormErrors } from "../StudentForm.validation";

interface PersonalDataSectionProps {
  student: StudentFormData;

  errors: StudentFormErrors;

  onChange: (
    field: keyof StudentFormData,

    value: string,
  ) => void;
}

const PersonalDataSection = ({
  student,
  errors,
  onChange,
}: PersonalDataSectionProps) => {
  return (
    <>
      <EveInput
        label="Nome completo"
        placeholder="Digite o nome do aluno"
        value={student.fullName}
        error={errors.fullName}
        onChange={(e) =>
          onChange(
            "fullName",

            e.target.value,
          )
        }
      />

      <EveInput
        label="E-mail"
        type="email"
        placeholder="Digite o e-mail"
        value={student.email}
        error={errors.email}
        onChange={(e) =>
          onChange(
            "email",

            e.target.value,
          )
        }
      />

      <EveInput
        label="Telefone"
        placeholder="(11) 99999-9999"
        value={student.phone}
        error={errors.phone}
        onChange={(e) =>
          onChange(
            "phone",

            e.target.value,
          )
        }
      />

      <EveInput
        label="Data de nascimento"
        type="date"
        value={student.birthDate}
        error={errors.birthDate}
        onChange={(e) =>
          onChange(
            "birthDate",

            e.target.value,
          )
        }
      />
    </>
  );
};

export default PersonalDataSection;
