import {
  Archive,
  Pencil,
} from "lucide-react";
import type { ContextMenuItem } from "../../../components/Navigation/ContextMenu";


interface SubjectsMenuProps {
  subjectsId: number;
  subjectsName: string;

  onOpenAdvanced: () => void;
}

export const createSubjectsMenu = ({

}: SubjectsMenuProps): ContextMenuItem[] => [
  {
    label: "Editar",
    icon: <Pencil size={16} />,
    onClick: () => {},
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
