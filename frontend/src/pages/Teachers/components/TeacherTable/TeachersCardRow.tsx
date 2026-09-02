import "./TeachersCardRow.css";

import { useNavigate } from "react-router-dom";

import EveBadge from "../../../../components/UI/Badge";
import EveContextMenu from "../../../../components/Navigation/ContextMenu";

import TeachersIdentity from "./components/TeachersIdentity";

import { createTeachersMenu } from "./config/TeachersMenu";

import type { Teacher } from "../../data/Teachers";

interface TeachersCardRowProps {
  teacher: Teacher;
}

const TeachersCardRow = ({ teacher }: TeachersCardRowProps) => {
  const navigate = useNavigate();

  const handleOpenAdvancedPanel = () => {
    navigate(`/teachers/${teacher.id}`);
  };

  const getVariant = () => {
    switch (teacher.status) {
      case "Ativo":
        return "success";

      case "Licença":
        return "warning";

      case "Afastado":
        return "danger";

      case "Férias":
        return "info";

      default:
        return "gray";
    }
  };

  return (
    <div className="teachers-row">
      <input type="checkbox" />

      <TeachersIdentity teacher={teacher} />

      <div>{teacher.discipline}</div>

      <div>{teacher.category}</div>

      <div>{teacher.workload}h</div>

      <div className="teachers-status">
        <EveBadge variant={getVariant()}>{teacher.status}</EveBadge>
      </div>

      <EveContextMenu
        items={createTeachersMenu({
          teacherName: teacher.fullName,
          teacherId: teacher.id,
          onOpenAdvanced: handleOpenAdvancedPanel,
        })}
      />
    </div>
  );
};

export default TeachersCardRow;
