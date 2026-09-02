import "./StudentAttendance.css";

interface StudentAttendanceProps {

    value: number;

}

const StudentAttendance = ({
    value,
}: StudentAttendanceProps) => {

    const getColor = () => {

        if (value >= 90) return "success";

        if (value >= 75) return "warning";

        return "danger";

    };

    return (

        <div className="student-attendance">

            <div className="attendance-track">

                <div
                    className={`attendance-fill ${getColor()}`}
                    style={{
                        width: `${value}%`,
                    }}
                />

            </div>

            <span>

                {value}%

            </span>

        </div>

    );

};

export default StudentAttendance;