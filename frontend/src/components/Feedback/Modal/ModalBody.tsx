import type { ReactNode } from "react";

interface ModalBodyProps {

    children: ReactNode;

}

const ModalBody = ({
    children,
}: ModalBodyProps) => {

    return (

        <div className="eve-modal-body">

            {children}

        </div>

    );

};

export default ModalBody;