import EveModal from "../../../../components/Feedback/Modal";

interface CreateStudentDialogProps {

    open: boolean;

    onClose: () => void;

}

const CreateStudentDialog = ({
    open,
    onClose,
}: CreateStudentDialogProps) => {

    return (

        <EveModal
            open={open}
            onClose={onClose}
            size="lg"
        >

            <EveModal.Header
                title="Novo aluno"
                onClose={onClose}
            />

            <EveModal.Body>

                <p>Olá 👋</p>

                <p>Nosso modal está funcionando.</p>

            </EveModal.Body>

            <EveModal.Footer>

                Footer

            </EveModal.Footer>

        </EveModal>

    );

};

export default CreateStudentDialog;