import {
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";
import type { ContextMenuItem } from "../../../../../components/Navigation/ContextMenu";

    

export const createTeachersMenu = (
    teacherName: string,
): ContextMenuItem[] => [
    {
        label: "Visualizar",
        icon: <Eye size={16} />,
        onClick: () => {
            console.log("Visualizar professor:", teacherName);
        },
    },
    {
        label: "Editar",
        icon: <Pencil size={16} />,
        onClick: () => {
            console.log("Editar professor:", teacherName);
        },
    },
    {
        divider: true,
    },
    {
        label: "Excluir",
        icon: <Trash2 size={16} />,
        danger: true,
        onClick: () => {
            console.log("Excluir professor:", teacherName);
        },
    },
];