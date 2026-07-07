import "./EveTableBody.css";

interface EveTableBodyProps {

    children: React.ReactNode;

}

const EveTableBody = ({
    children,
}: EveTableBodyProps) => {

    return (

        <div className="eve-table-body">

            {children}

        </div>

    );

};

export default EveTableBody;