import "./TeachersAttendance.css";

interface TeachersAttendanceProps {
  value: number;
}

const TeachersAttendance = ({ value }: TeachersAttendanceProps) => {
  const getColor = () => {
    if (value >= 90) return "success";

    if (value >= 75) return "warning";

    return "danger";
  };

  return (
    <div className="teachers-attendance">
      <div className="attendance-track">
        <div
          className={`attendance-fill ${getColor()}`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>

      <span>{value}%</span>
    </div>
  );
};

export default TeachersAttendance;
