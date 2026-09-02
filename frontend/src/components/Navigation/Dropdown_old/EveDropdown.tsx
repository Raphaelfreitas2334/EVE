import "./EveDropdown.css";

import { useState } from "react";
import { MoreVertical } from "lucide-react";

interface DropdownItem{

    label:string;

    icon:React.ReactNode;

    onClick:()=>void;

    danger?:boolean;

}

interface EveDropdownProps{

    items:DropdownItem[];

}

const EveDropdown = ({
    items,
}:EveDropdownProps)=>{

    const [open,setOpen]=useState(false);

    return(

        <div className="eve-dropdown">

            <button
                className="dropdown-trigger"
                onClick={()=>setOpen(!open)}
            >

                <MoreVertical size={18}/>

            </button>

            {

                open &&

                <div className="dropdown-menu">

                    {

                        items.map((item,index)=>(

                            <button
                                key={index}
                                className={`dropdown-item ${item.danger?"danger":""}`}
                                onClick={()=>{
                                    item.onClick();
                                    setOpen(false);
                                }}
                            >

                                {item.icon}

                                {item.label}

                            </button>

                        ))

                    }

                </div>

            }

        </div>

    );

};

export default EveDropdown;