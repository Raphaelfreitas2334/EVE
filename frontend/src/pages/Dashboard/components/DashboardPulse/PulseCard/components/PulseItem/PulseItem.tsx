import "./PulseItem.css";

interface PulseItemProps{

    status:"danger" | "warning" | "success";

    text:string;

}

const PulseItem = ({
    status,
    text,
}:PulseItemProps)=>{

    return(

        <div className={`pulse-item ${status}`}>

            <span className="pulse-dot"></span>

            <p>{text}</p>

        </div>

    );

};

export default PulseItem;