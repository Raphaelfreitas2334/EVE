

import EveProgressList from "../../../../components/UI/ProgressList/ndex";
import type {
    EveProgressListItem,
} from "../../../../components/UI/ProgressList/types";

interface GradesOverviewProps {

    items: EveProgressListItem[];

}

const GradesOverview = ({

    items,

}: GradesOverviewProps) => {

    return (

        <EveProgressList

            items={items}

            showValue={false}

            showPercentage

            showProgress

        />

    );

};

export default GradesOverview;