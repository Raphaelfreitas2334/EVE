export interface StudentFormData {

    fullName: string;

    email: string;

    phone: string;

    birthDate: string;

    course: string;

    classroom: string;

    status: string;

    observations: string;

}

export interface StudentFormProps {

    initialValues?: Partial<StudentFormData>;

    onSubmit: (data: StudentFormData) => void;

}