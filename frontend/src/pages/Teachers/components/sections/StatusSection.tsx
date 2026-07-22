import EveInput from "../../../../components/UI/Input";
import EveSelect from "../../../../components/UI/Select";
import type { TeachersFormData } from "../TeacherForm/TeachersForm.types";
import type { TeachersFormErrors } from "../TeacherForm/TeachersForm.validation";

interface TeachersSectionProps {
  teachers: TeachersFormData;

  errors: TeachersFormErrors;

  onChange: (
    field: keyof TeachersFormData,

    value: string,
  ) => void;
}

const StatusSection = ({
  teachers,
  errors,
  onChange,
}: TeachersSectionProps) => {
  return (
    <>
      <EveSelect
        label="Status"
        value={teachers.status}
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
        value={teachers.observations}
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
