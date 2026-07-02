import EveRadarChart from "../../../../../../components/UI/Chart/RadarChart";

const PerformanceChart = () => {

    return(

        <EveRadarChart

            labels={[
                "Português",
                "Matemática",
                "História",
                "Geografia",
                "Física",
                "Química",
            ]}

            data={[
                92,
                81,
                88,
                95,
                76,
                84,
            ]}

        />

    );

};

export default PerformanceChart;