import EveDoughnutChart from "../../../../components/UI/Chart/DoughnutChart";

interface GradesDistributionProps {

    labels: string[];

    data: number[];

}

const GradesDistribution = ({

    labels,

    data,

}: GradesDistributionProps) => {

    return (

        <EveDoughnutChart

            labels={labels}

            data={data}

            colors={[

                "#10B981",
                "#3B82F6",
                "#F59E0B",
                "#EF4444",

            ]}

            cutout="72%"

            height={250}

            legendPosition="bottom"

        />

    );

};

export default GradesDistribution;