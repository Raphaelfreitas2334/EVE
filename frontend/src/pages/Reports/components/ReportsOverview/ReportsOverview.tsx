

import EveProgressList from "../../../../components/UI/ProgressList/ndex";
import type {
    EveProgressListItem,
} from "../../../../components/UI/ProgressList/types";

interface ReportsOverviewProps {

    items: EveProgressListItem[];

}

const ReportsOverview = ({

    items,

}: ReportsOverviewProps) => {

    return (

        <EveProgressList

            items={items}

            showValue={false}

            showPercentage

            showProgress

        />

    );

};

export default ReportsOverview;