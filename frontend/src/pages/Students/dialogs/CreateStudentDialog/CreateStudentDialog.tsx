import EveModal from "../../../../components/Feedback/Modal";
import EveButton from "../../../../components/UI/Button";

import StudentForm from "../../components/StudentForm";
import useStudentForm from "./useStudentForm";


interface CreateStudentDialogProps {
  open: boolean;

  onClose: () => void;
}

const CreateStudentDialog = ({ open, onClose }: CreateStudentDialogProps) => {
  const {
    student,

    errors,

    handleChange,

    submit,

    reset,
  } = useStudentForm();

  const handleSave = async () => {
    const success = await submit();

    if (!success) {
      return;
    }

    /*
            Futuramente:

            await studentService.create(student);
        */

    reset();

    onClose();
  };

  const handleCancel = () => {
    reset();

    onClose();
  };

  return (
    <EveModal open={open} onClose={handleCancel} size="lg">
      <EveModal.Header title="Novo aluno" onClose={handleCancel} />

      <EveModal.Body>
        <StudentForm
          student={student}
          errors={errors}
          onChange={handleChange}
        />
      </EveModal.Body>

      <EveModal.Footer>
        <EveButton variant="outline" onClick={handleCancel}>
          Cancelar
        </EveButton>

        <EveButton onClick={handleSave}>Salvar aluno</EveButton>
      </EveModal.Footer>
    </EveModal>
  );
};

export default CreateStudentDialog;
