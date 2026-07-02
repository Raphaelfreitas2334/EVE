import "./EveChartCard.css";

import EveCard from "../Card";

import { MoreVertical } from "lucide-react";

interface EveChartCardProps {

    title: string;

    subtitle?: string;

    children: React.ReactNode;

}

const EveChartCard = ({
    title,
    subtitle,
    children,
}: EveChartCardProps) => {

    return (

        <EveCard>

            <div className="chart-card-header">

                <div>

                    <h3>{title}</h3>

                    {subtitle && (

                        <p>{subtitle}</p>

                    )}

                </div>

                <button>

                    <MoreVertical size={20}/>

                </button>

            </div>

            <div className="chart-card-body">

                {children}

            </div>

        </EveCard>

    );

};

export default EveChartCard;