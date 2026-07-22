import {
  Archive,
  BookOpen,
  Columns3Cog,
  FileText,
  GraduationCap,
  NotebookPen,
  Pencil,
  User,
} from "lucide-react";

import type { ContextMenuItem } from "../../../../../components/Navigation/ContextMenu";

interface TeachersMenuProps {
  teacherId: number;
  teacherName: string;

  onOpenAdvanced: () => void;
}

export const createTeachersMenu = ({
  teacherId,
  teacherName,
  onOpenAdvanced,
}: TeachersMenuProps): ContextMenuItem[] => [
  {
    label: "Ver perfil",
    icon: <User size={16} />,
    onClick: () => {
      console.log(teacherId, teacherName);
    },
  },

  {
    label: "Editar",
    icon: <Pencil size={16} />,
    onClick: () => {},
  },

  {
    label: "Turmas",
    icon: <GraduationCap size={16} />,
    onClick: () => {},
  },

  {
    label: "Notas",
    icon: <NotebookPen size={16} />,
    onClick: () => {},
  },

  {
    label: "Frequência",
    icon: <BookOpen size={16} />,
    onClick: () => {},
  },

  {
    label: "Documentos",
    icon: <FileText size={16} />,
    onClick: () => {},
  },

  {
    label: "Painel avançado",
    icon: <Columns3Cog size={16} />,
    onClick: onOpenAdvanced,
  },

  {
    divider: true,
  },

  {
    label: "Arquivar",
    icon: <Archive size={16} />,
    danger: true,
    onClick: () => {},
  },
];
