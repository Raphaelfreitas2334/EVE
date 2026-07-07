import "./StudentCardRow.css";

import EveBadge from "../../../../components/UI/Badge";

import {
    TriangleAlert,
} from "lucide-react";
import StudentIdentity from "./components/StudentIdentity";
import StudentAttendance from "./components/StudentAttendance";
import StudentAverage from "./components/StudentAverage";

import EveContextMenu from "../../../../components/Navigation/ContextMenu";
import { createStudentMenu } from "./config/studentMenu";

interface StudentCardRowProps {

    student: {

        name: string;

        course: string;

        classroom: string;

        attendance: number;

        average: number;

        status: string;

        alerts: number;

    };

}

const StudentCardRow = ({
    student,
}: StudentCardRowProps) => {

    const getStatusVariant = ():
        | "success"
        | "warning"
        | "danger"
        | "info"
        | "primary"
        | "gray" => {

        switch (student.status) {

            case "Excelente":
                return "primary";

            case "Ativo":
                return "success";

            case "Acompanhamento":
                return "warning";

            case "Em risco":
                return "danger";

            default:
                return "gray";

        }

    };

    return (

        <div className="student-row">

            <input type="checkbox" />

            <StudentIdentity
                name={student.name}
                course={student.course}
                classroom={student.classroom}
            />

            <div className="student-status">

                <EveBadge variant={getStatusVariant()}>

                    {student.status}

                </EveBadge>

            </div>

            <StudentAttendance

                value={student.attendance}

            />

            <StudentAverage

                value={student.average}

            />

            {
                student.alerts === 0
                    ? (
                        <span className="no-alert">
                            —
                        </span>
                    )
                    : (
                        <div className="student-alerts">

                            <TriangleAlert size={18} />

                            {student.alerts}

                        </div>
                    )
            }

            <EveContextMenu

                items={createStudentMenu(student.name)}

            />

        </div>

    );

};

export default StudentCardRow;