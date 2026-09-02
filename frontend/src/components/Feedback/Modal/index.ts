import EveModal from "./EveModal";

import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const Modal = Object.assign(EveModal, {

    Header: ModalHeader,

    Body: ModalBody,

    Footer: ModalFooter,

});

export default Modal;