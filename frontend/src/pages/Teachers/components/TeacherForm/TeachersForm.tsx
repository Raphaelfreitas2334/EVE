import "./TeachersForm.css";

import EveFormSection from "../../../../components/Forms/FormSection";

import type { TeachersFormProps } from "./TeachersForm.types";

import PersonalDataSection from "../sections/ProfessionalDataSection";
import ProfessionalDataSection from "../sections/ProfessionalDataSection";
import StatusSection from "../sections/StatusSection";

const TeachersForm = ({ teachers, errors, onChange }: TeachersFormProps) => {
  return (
    <form className="teachers-form">
      <EveFormSection
        title="Dados pessoais"
        subtitle="Informações pessoais do professor."
      >
        <PersonalDataSection
          teachers={teachers}
          errors={errors}
          onChange={onChange}
        />
      </EveFormSection>

      <EveFormSection
        title="Dados profissionais"
        subtitle="Informações funcionais."
      >
        <ProfessionalDataSection
          teachers={teachers}
          errors={errors}
          onChange={onChange}
        />
      </EveFormSection>

      <EveFormSection title="Situação" subtitle="Situação funcional.">
        <StatusSection
          teachers={teachers}
          errors={errors}
          onChange={onChange}
        />
      </EveFormSection>
    </form>
  );
};

export default TeachersForm;
