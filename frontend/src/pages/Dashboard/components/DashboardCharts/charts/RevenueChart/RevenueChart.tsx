import EveAreaChart from "../../../../../../components/UI/Chart/AreaChart";

const RevenueChart = () => {

    return(

        <EveAreaChart

            labels={[
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun"
            ]}

            data={[
                12,
                18,
                22,
                26,
                31,
                38
            ]}

            color="#F59E0B"

        />

    );

};

export default RevenueChart;