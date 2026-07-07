import "./ActivityItem.css";

import EveCard from "../../../../../../components/UI/Card";

interface ActivityItemProps{

    icon:React.ReactNode;

    color:"primary"|"success"|"warning"|"danger";

    title:string;

    subtitle:string;

}

const ActivityItem = ({
    icon,
    color,
    title,
    subtitle,
}:ActivityItemProps)=>{

    return(

        <EveCard>

            <div className="activity-item">

                <div className={`activity-icon ${color}`}>

                    {icon}

                </div>

                <div className="activity-content">

                    <h4>{title}</h4>

                    <p>{subtitle}</p>

                </div>

            </div>

        </EveCard>

    );

};

export default ActivityItem;