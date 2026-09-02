import "./EveModal.css";

import {
    useEffect,
    type ReactNode,
} from "react";

import { createPortal } from "react-dom";

interface EveModalProps{

    open:boolean;

    onClose:()=>void;

    children:ReactNode;

    size?:"sm"|"md"|"lg";

}

const EveModal=({

    open,

    onClose,

    children,

    size="md",

}:EveModalProps)=>{

    useEffect(()=>{

        if(!open){

            document.body.style.overflow="";

            return;

        }

        document.body.style.overflow="hidden";

        const handleEsc=(event:KeyboardEvent)=>{

            if(event.key==="Escape"){

                onClose();

            }

        };

        document.addEventListener("keydown",handleEsc);

        return()=>{

            document.body.style.overflow="";

            document.removeEventListener(
                "keydown",
                handleEsc
            );

        };

    },[open,onClose]);

    if(!open){

        return null;

    }

    return createPortal(

        <div
            className="eve-modal-overlay"
            onClick={onClose}
        >

            <div
                className={`eve-modal ${size}`}
                onClick={(event)=>event.stopPropagation()}
            >

                {children}

            </div>

        </div>,

        document.body

    );

};

export default EveModal;