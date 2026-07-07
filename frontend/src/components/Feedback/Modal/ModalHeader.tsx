import { X } from "lucide-react";

interface ModalHeaderProps {

    title: string;

    onClose?: () => void;

}

const ModalHeader = ({
    title,
    onClose,
}: ModalHeaderProps) => {

    return (

        <header className="eve-modal-header">

            <h2>

                {title}

            </h2>

            {

                onClose && (

                    <button
                        type="button"
                        className="modal-close"
                        onClick={onClose}
                    >

                        <X size={20}/>

                    </button>

                )

            }

        </header>

    );

};

export default ModalHeader;