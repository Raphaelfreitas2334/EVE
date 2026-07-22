import "./TeachersIdentity.css";

import EveAvatar from "../../../../../../components/UI/Avatar";

import type { Teacher } from "../../../../data/Teachers";

interface Props {
  teacher: Teacher;
}

const TeachersIdentity = ({ teacher }: Props) => {
  return (
    <div className="teachers-identity">
      <EveAvatar name={teacher.fullName} />

      <div className="teachers-info">
        <strong>{teacher.fullName}</strong>

        <span>{teacher.email}</span>
      </div>
    </div>
  );
};

export default TeachersIdentity;
