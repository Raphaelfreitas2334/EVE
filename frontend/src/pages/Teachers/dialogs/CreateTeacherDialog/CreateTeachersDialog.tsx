import EveModal from "../../../../components/Feedback/Modal";
import EveButton from "../../../../components/UI/Button";
import TeachersForm from "../../components/TeacherForm";
import useTeachersForm from "../../hooks/useTeacherForm";

interface CreateTeachersDialogProps {
  open: boolean;

  onClose: () => void;
}

const CreateTeachersDialog = ({ open, onClose }: CreateTeachersDialogProps) => {
  const {
    teachers,

    errors,

    handleChange,

    submit,

    reset,
  } = useTeachersForm();

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
      <EveModal.Header title="Novo professor" onClose={handleCancel} />

      <EveModal.Body>
        <TeachersForm
          teachers={teachers}
          errors={errors}
          onChange={handleChange}
        />
      </EveModal.Body>

      <EveModal.Footer>
        <EveButton variant="outline" onClick={handleCancel}>
          Cancelar
        </EveButton>

        <EveButton onClick={handleSave}>Salvar professor</EveButton>
      </EveModal.Footer>
    </EveModal>
  );
};

export default CreateTeachersDialog;
