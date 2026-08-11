import "./Attendance.css";

import EvePageHeader from "../../components/UI/PageHeader";
import Panel from "../../components/UI/Panel/Panel";

import useAttendance from "./hooks/useAttendance";

import AttendanceFilters from "./components/AttendanceFilters";
import AttendanceStats from "./components/AttendanceStats";
import AttendanceOverview from "./components/AttendanceOverview";
import AttendanceDistribution from "./components/AttendanceDistribution";
import AttendanceTrendChart from "./components/AttendanceTrendChart";
import AttendanceRiskRanking from "./components/AttendanceRiskRanking";
import AttendanceTable from "./components/AttendanceTable";
import EveHorizontalBarChart from "../../components/UI/Chart/HorizontalBarChart";

const Attendance = () => {

    const {

        filters,

        stats,

        overview,

        trend,

        distribution,

        ranking,

        table,

        filteredClasses,

        setPeriod,

        setSearch,

        setCourse,

        setClassroom,

        setStatus,

        clearFilters,

    } = useAttendance();

    return (

        <main className="attendance">

            <EvePageHeader

                title="Presenças"

                subtitle="Acompanhe a frequência dos alunos, identifique riscos de evasão e monitore indicadores por turma."

            />

            <AttendanceFilters

                filters={filters}

                onSearchChange={setSearch}

                onCourseChange={setCourse}

                onPeriodChange={setPeriod}

                onClassroomChange={setClassroom}

                onStatusChange={setStatus}

                onClearFilters={clearFilters}

            />

            <AttendanceStats

                stats={stats}

            />

            <section className="attendance-grid">

                <Panel title="Resumo por Curso">

                    <AttendanceOverview

                        items={overview}

                    />

                </Panel>

                <Panel title="Distribuição da Frequência">

                    <AttendanceDistribution

                        labels={distribution.labels}

                        data={distribution.data}

                    />

                </Panel>

                <Panel title="Frequência por Turma">

                    <AttendanceTrendChart

                        data={trend}

                    />

                    <EveHorizontalBarChart

                        labels={filteredClasses.map(
                            item => item.classroom,
                        )}

                        data={filteredClasses.map(
                            item => item.students,
                        )}

                        colors={[
                            "#7C3AED",
                        ]}

                        unit="alunos"

                        height={260}

                    />

                </Panel>

                <Panel title="Alunos com Baixa Frequência">

                    <AttendanceRiskRanking

                       students={ranking}

                    />

                </Panel>

            </section>

            <Panel

                title="Lista de Presenças"

            >

                <AttendanceTable

                    rows={table.rows}

                />

            </Panel>

        </main>

    );

};

export default Attendance;