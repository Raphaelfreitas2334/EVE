import "./EveTableHeader.css";

interface EveTableHeaderProps {

    children: React.ReactNode;

}

const EveTableHeader = ({
    children,
}: EveTableHeaderProps) => {

    return (

        <header className="eve-table-header">

            {children}

        </header>

    );

};

export default EveTableHeader;