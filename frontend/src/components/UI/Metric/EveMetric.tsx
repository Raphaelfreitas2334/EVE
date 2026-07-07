import "./EveMetric.css";

interface EveMetricProps {

    value:string | number;

    label?:string;

    color?:
        | "primary"
        | "success"
        | "warning"
        | "danger";

}

const EveMetric = ({

    value,

    label,

    color="primary",

}:EveMetricProps)=>{

    return(

        <div className="eve-metric">

            <span
                className={`metric-value ${color}`}
            >

                {value}

            </span>

            {

                label &&

                <small>

                    {label}

                </small>

            }

        </div>

    );

};

export default EveMetric;