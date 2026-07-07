import type { ReactNode } from "react";

interface ModalFooterProps {

    children: ReactNode;

}

const ModalFooter = ({
    children,
}: ModalFooterProps) => {

    return (

        <footer className="eve-modal-footer">

            {children}

        </footer>

    );

};

export default ModalFooter;