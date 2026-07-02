import EveDoughnutChart from "../../../../../../components/UI/Chart/DoughnutChart";

const StudentsChart = () => {

    return(

        <EveDoughnutChart

            labels={[
                "ADS",
                "DS",
                "Administração",
                "Logística",
            ]}

            data={[
                220,
                180,
                140,
                90,
            ]}

        />

    );

};

export default StudentsChart;