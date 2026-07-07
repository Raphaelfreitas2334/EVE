import EveInput from "../../../../../components/UI/Input";
import EveSelect from "../../../../../components/UI/Select";

import type { StudentFormData } from "../StudentForm.types";

import type { StudentFormErrors } from "../StudentForm.validation";

interface AcademicDataSectionProps {
  student: StudentFormData;

  errors: StudentFormErrors;

  onChange: (
    field: keyof StudentFormData,

    value: string,
  ) => void;
}

const AcademicDataSection = ({
  student,
  errors,
  onChange,
}: AcademicDataSectionProps) => {
  return (
    <>
      <EveInput
        label="Matrícula"
        placeholder="Digite a matrícula"
        value={student.registration}
        error={errors.registration}
        onChange={(e) =>
          onChange(
            "registration",

            e.target.value,
          )
        }
      />

      <EveSelect
        label="Curso"
        value={student.course}
        onChange={(e) =>
          onChange(
            "course",

            e.target.value,
          )
        }
        options={[
          {
            value: "ads",

            label: "Análise e Desenvolvimento de Sistemas",
          },

          {
            value: "ds",

            label: "Data Science",
          },

          {
            value: "adm",

            label: "Administração",
          },
        ]}
      />

      <EveSelect
        label="Turma"
        value={student.classroom}
        onChange={(e) =>
          onChange(
            "classroom",

            e.target.value,
          )
        }
        options={[
          {
            value: "ads-1",

            label: "ADS-1",
          },

          {
            value: "ads-2",

            label: "ADS-2",
          },

          {
            value: "ds-1",

            label: "DS-1",
          },
        ]}
      />
    </>
  );
};

export default AcademicDataSection;
