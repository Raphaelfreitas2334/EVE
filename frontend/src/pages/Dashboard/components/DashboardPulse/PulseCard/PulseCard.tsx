import "./PulseCard.css";

import EveCard from "../../../../../components/UI/Card";
import PulseItem from "./components/PulseItem";

interface PulseItem {
    status: "danger" | "warning" | "success";
    text: string;
}

interface PulseCardProps {
    icon: React.ReactNode;
    title: string;
    items: PulseItem[];
    action: string;
}

const PulseCard = ({
    icon,
    title,
    items,
    action,
}:PulseCardProps)=>{

    return(

        <EveCard>

            <div className="pulse-card-header">

                <div className="pulse-icon">

                    {icon}

                </div>

                <h3>{title}</h3>

            </div>

            <div className="pulse-list">

                {items.map((item, index) => (

                    <PulseItem
                        key={index}
                        status={item.status}
                        text={item.text}
                    />

                ))}

            </div>

            <button className="pulse-button">

                {action}

            </button>

        </EveCard>

    );

};

export default PulseCard;