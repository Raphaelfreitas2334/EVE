import "./Sidebar.css";

import {
    LayoutDashboard,
    GraduationCap,
    Users,
    School,
    BookOpen,
    ClipboardCheck,
    NotebookPen,
    BarChart3,
    UserCog,
    Settings
} from "lucide-react";

const Sidebar = () => {

    return (

        <aside className="sidebar">

            <div className="logo">

                <h2>EVE</h2>

                <span>Educational Vision Ecosystem</span>

            </div>

            <nav>

                <ul>

                    <li>

                        <LayoutDashboard size={20} />

                        <span>Dashboard</span>

                    </li>

                    <li>

                        <GraduationCap size={20} />

                        <span>Alunos</span>

                    </li>

                    <li>

                        <Users size={20} />

                        <span>Professores</span>

                    </li>

                    <li>

                        <School size={20} />

                        <span>Turmas</span>

                    </li>

                    <li>

                        <BookOpen size={20} />

                        <span>Disciplinas</span>

                    </li>

                    <li>

                        <ClipboardCheck size={20} />

                        <span>Presenças</span>

                    </li>

                    <li>

                        <NotebookPen size={20} />

                        <span>Notas</span>

                    </li>

                    <li>

                        <BarChart3 size={20} />

                        <span>Relatórios</span>

                    </li>

                    <li>

                        <UserCog size={20} />

                        <span>Usuários</span>

                    </li>

                    <li>

                        <Settings size={20} />

                        <span>Configurações</span>

                    </li>

                </ul>

            </nav>

        </aside>

    );

};

export default Sidebar;