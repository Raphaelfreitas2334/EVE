import EveSelect from "../../../../../components/UI/Select";
import EveInput from "../../../../../components/UI/Input";

import type { StudentFormData } from "../StudentForm.types";

import type { StudentFormErrors } from "../StudentForm.validation";

interface StatusSectionProps {
  student: StudentFormData;

  errors: StudentFormErrors;

  onChange: (
    field: keyof StudentFormData,

    value: string,
  ) => void;
}

const StatusSection = ({ student, errors, onChange }: StatusSectionProps) => {
  return (
    <>
      <EveSelect
        label="Status"
        value={student.status}
        onChange={(e) =>
          onChange(
            "status",

            e.target.value,
          )
        }
        options={[
          {
            value: "Ativo",

            label: "Ativo",
          },

          {
            value: "Acompanhamento",

            label: "Acompanhamento",
          },

          {
            value: "Em risco",

            label: "Em risco",
          },
        ]}
      />

      <EveInput
        label="Observações"
        placeholder="Digite alguma observação"
        value={student.observations}
        error={errors.observations}
        onChange={(e) =>
          onChange(
            "observations",

            e.target.value,
          )
        }
      />
    </>
  );
};

export default StatusSection;
