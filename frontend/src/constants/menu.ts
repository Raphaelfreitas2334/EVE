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
  Settings,
} from "lucide-react";

export const MENU = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    route: "/dashboard",
  },
  {
    title: "Alunos",
    icon: GraduationCap,
    route: "/students",
  },
  {
    title: "Professores",
    icon: Users,
    route: "/teachers",
  },
  {
    title: "Turmas",
    icon: School,
    route: "/classes",
  },
  {
    title: "Disciplinas",
    icon: BookOpen,
    route: "/subjects",
  },
  {
    title: "Presenças",
    icon: ClipboardCheck,
    route: "/attendance",
  },
  {
    title: "Notas",
    icon: NotebookPen,
    route: "/grades",
  },
  {
    title: "Relatórios",
    icon: BarChart3,
    route: "/reports",
  },
  {
    title: "Usuários",
    icon: UserCog,
    route: "/users",
  },
  {
    title: "Configurações",
    icon: Settings,
    route: "/settings",
  },
];
