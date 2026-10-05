import EveDoughnutChart from "../../../../components/UI/Chart/DoughnutChart";


interface ReportsDistributionProps {
    labels: string[];
    data: number[];
}

const ReportsDistribution = ({
    labels,
    data,
}: ReportsDistributionProps) => {
    return (
        <EveDoughnutChart
            labels={labels}
            data={data}
        />
    );
};

export default ReportsDistribution;