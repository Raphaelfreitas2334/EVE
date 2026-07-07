import "./StudentIdentity.css";

import EveAvatar from "../../../../../../components/UI/Avatar";

interface Props {

    name:string;

    course:string;

    classroom:string;

}

const StudentIdentity = ({
    name,
    course,
    classroom,
}:Props)=>{

    return(

        <div className="student-identity">

            <EveAvatar
                name={name}
            />

            <div className="student-info">

                <strong>

                    {name}

                </strong>

                <span>

                    {course} • {classroom}

                </span>

            </div>

        </div>

    );

};

export default StudentIdentity;