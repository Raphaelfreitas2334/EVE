import {
    ChevronRight,
    UserRound,
} from "lucide-react";

import EveBadge from "../../../../components/UI/Badge";
import EveRankingList from "../../../../components/UI/RankingList";
import type { ReportModel } from "../../data/mockReports";



interface GradesRiskRankingProps {

    students: ReportModel[];

}

const GradesRiskRanking = ({

    students,

}: GradesRiskRankingProps) => {

    const items = students.map(student => ({

        id: student.id,

        avatar: <UserRound size={20} />,

        title: student.name,

        subtitle: `${student.classroom} • ${student.subject}`,

        value: `${student.average.toFixed(1)}%`,

        progress: student.average,

        progressColor:

            student.average < 60

                ? "#EF4444"

                : student.average < 75

                    ? "#F59E0B"

                    : "#3B82F6",

        badge: (

            <EveBadge

                variant={
                    student.status === "Excelente"
                        ? "success"
                        : student.status === "Bom"
                        ? "info"
                        : student.status === "Atenção"
                        ? "warning"
                        : "danger"
                }

            >

                {student.status}

            </EveBadge>

        ),

        action: (

            <ChevronRight size={18} />

        ),

    }));

    return (

        <EveRankingList

            compact

            items={items}

        />

    );

};

export default GradesRiskRanking;