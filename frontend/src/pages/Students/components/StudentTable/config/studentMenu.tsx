import {
    Archive,
    BookOpen,
    Calendar,
    GraduationCap,
    Pencil,
    User,
} from "lucide-react";
import type { ContextMenuItem } from "../../../../../components/Navigation/ContextMenu";



export const createStudentMenu = (

    studentName:string

):ContextMenuItem[]=>[

    {
        label:"Ver perfil",
        icon:<User size={16}/>,
        onClick:()=>console.log(studentName),
    },

    {
        label:"Editar",
        icon:<Pencil size={16}/>,
        onClick:()=>{},
    },

    {
        label:"Notas",
        icon:<GraduationCap size={16}/>,
        onClick:()=>{},
    },

    {
        label:"Frequência",
        icon:<Calendar size={16}/>,
        onClick:()=>{},
    },

    {
        label:"Histórico",
        icon:<BookOpen size={16}/>,
        onClick:()=>{},
    },

    {
        divider:true,
    },

    {
        label:"Arquivar",
        icon:<Archive size={16}/>,
        danger:true,
        onClick:()=>{},
    },

];