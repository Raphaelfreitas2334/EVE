import "./StudentForm.css";

import { useState } from "react";

import EveInput from "../../../../components/UI/Input";
import EveFormSection from "../../../../components/UI/FormSection";

import type {
    StudentFormData,
    StudentFormProps,
} from "./StudentForm.types";

const StudentForm = ({
    initialValues,
}: StudentFormProps) => {

    const [form, setForm] = useState<StudentFormData>({

        fullName: initialValues?.fullName ?? "",

        email: initialValues?.email ?? "",

        phone: initialValues?.phone ?? "",

        birthDate: initialValues?.birthDate ?? "",

        course: initialValues?.course ?? "",

        classroom: initialValues?.classroom ?? "",

        status: initialValues?.status ?? "Ativo",

        observations: initialValues?.observations ?? "",

    });

    const updateField = (
        field: keyof StudentFormData,
        value: string
    ) => {

        setForm(current => ({

            ...current,

            [field]: value,

        }));

    };

    return (

        <form className="student-form">

            <EveFormSection
                title="Dados pessoais"
                description="Informações básicas do aluno."
            >

                <EveInput
                    label="Nome completo"
                    value={form.fullName}
                    onChange={(e)=>updateField("fullName",e.target.value)}
                />

                <EveInput
                    label="E-mail"
                    value={form.email}
                    onChange={(e)=>updateField("email",e.target.value)}
                />

                <EveInput
                    label="Telefone"
                    value={form.phone}
                    onChange={(e)=>updateField("phone",e.target.value)}
                />

                <EveInput
                    label="Data de nascimento"
                    type="date"
                    value={form.birthDate}
                    onChange={(e)=>updateField("birthDate",e.target.value)}
                />

            </EveFormSection>

            <EveFormSection
                title="Dados acadêmicos"
            >

                <EveInput
                    label="Observações"
                />

                <EveInput
                    label="Observações"
                />

                <EveInput
                    label="Observações"
                />

            </EveFormSection>

        </form>

    );

};

export default StudentForm;