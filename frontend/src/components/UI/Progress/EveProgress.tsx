import "./EveProgress.css";


interface EveProgressProps {

    value:number;

    color?:
        | "success"
        | "warning"
        | "danger"
        | "primary";

}

const EveProgress = ({

    value,

    color="primary",

}:EveProgressProps)=>{

    return(

        <div className="eve-progress">

            <div
                className={`eve-progress-bar ${color}`}
                style={{
                    width:`${value}%`,
                }}
            />

        </div>

    );

};

export default EveProgress;