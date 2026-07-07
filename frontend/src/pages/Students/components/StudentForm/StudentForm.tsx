import "./StudentForm.css";

import EveFormSection from "../../../../components/Forms/FormSection";

import type { StudentFormProps } from "./StudentForm.types";

import PersonalDataSection from "./sections/PersonalDataSection";
import AcademicDataSection from "./sections/AcademicDataSection";
import StatusSection from "./sections/StatusSection";

const StudentForm = ({ student, errors, onChange }: StudentFormProps) => {
  return (
    <form className="student-form">
      <EveFormSection
        title="Dados pessoais"
        subtitle="Informações básicas do aluno."
      >
        <PersonalDataSection
          student={student}
          errors={errors}
          onChange={onChange}
        />
      </EveFormSection>

      <EveFormSection
        title="Dados acadêmicos"
        subtitle="Informações escolares."
      >
        <AcademicDataSection
          student={student}
          errors={errors}
          onChange={onChange}
        />
      </EveFormSection>

      <EveFormSection title="Situação" subtitle="Status do aluno.">
        <StatusSection student={student} errors={errors} onChange={onChange} />
      </EveFormSection>
    </form>
  );
};

export default StudentForm;
