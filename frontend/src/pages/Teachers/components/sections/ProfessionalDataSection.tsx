import EveInput from "../../../../components/UI/Input";

import type { TeachersFormData } from "../TeacherForm/TeachersForm.types";
import type { TeachersFormErrors } from "../TeacherForm/TeachersForm.validation";

interface PersonalDataSectionProps {
  teachers: TeachersFormData;

  errors: TeachersFormErrors;

  onChange: (field: keyof TeachersFormData, value: string) => void;
}

const PersonalDataSection = ({
  teachers,
  errors,
  onChange,
}: PersonalDataSectionProps) => {
  return (
    <>
      <EveInput
        label="Nome completo"
        placeholder="Digite o nome do professor"
        value={teachers.fullName}
        error={errors.fullName}
        onChange={(e) => onChange("fullName", e.target.value)}
      />

      <EveInput
        label="E-mail"
        type="email"
        placeholder="Digite o e-mail"
        value={teachers.email}
        error={errors.email}
        onChange={(e) => onChange("email", e.target.value)}
      />

      <EveInput
        label="Telefone"
        placeholder="(11) 99999-9999"
        value={teachers.phone}
        error={errors.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />

      <EveInput
        label="Data de nascimento"
        type="date"
        value={teachers.birthDate}
        error={errors.birthDate}
        onChange={(e) => onChange("birthDate", e.target.value)}
      />
    </>
  );
};

export default PersonalDataSection;
