import EveBarChart from "../../../../../../components/UI/Chart/BarChart";

const FrequencyChart = () => {

    return (

        <EveBarChart

            labels={[
                "DS-1",
                "DS-2",
                "DS-3",
                "ADS-1",
                "ADS-2"
            ]}

            data={[
                95,
                91,
                87,
                98,
                93
            ]}

            color="#22C55E"

        />

    );

};

export default FrequencyChart;