import "./EveTable.css";

interface EveTableProps {

    children: React.ReactNode;

}

const EveTable = ({
    children,
}: EveTableProps) => {

    return (

        <section className="eve-table">

            {children}

        </section>

    );

};

export default EveTable;