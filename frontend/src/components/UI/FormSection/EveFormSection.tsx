import "./EveFormSection.css";

import type { ReactNode } from "react";

interface EveFormSectionProps {

    title: string;

    description?: string;

    children: ReactNode;

}

const EveFormSection = ({
    title,
    description,
    children,
}: EveFormSectionProps) => {

    return (

        <section className="eve-form-section">

            <header className="eve-form-section-header">

                <h3>

                    {title}

                </h3>

                {

                    description && (

                        <p>

                            {description}

                        </p>

                    )

                }

            </header>

            <div className="eve-form-section-content">

                {children}

            </div>

        </section>

    );

};

export default EveFormSection;