import EveLineChart from "../../../../../../components/UI/Chart/LineChart";

const EnrollmentChart = () => {

    return (

        <EveLineChart

            labels={[
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez"
            ]}

            data={[
                40,
                55,
                63,
                70,
                82,
                91,
                105,
                118,
                132,
                145,
                152,
                168
            ]}

        />

    );

};

export default EnrollmentChart;