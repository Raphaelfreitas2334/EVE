import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login/Login";

import MainLayout from "../layouts/MainLayout/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Students/Students";
import Teachers from "../pages/Teachers/Teachers";
import Classes from "../pages/Classes/Classes";
import Subjects from "../pages/Subjects/Subjects";
import Attendance from "../pages/Attendance/Attendance";
import Grades from "../pages/Grades/Grades";
import Reports from "../pages/Reports/Reports";
import Users from "../pages/Users/Users";
import Settings from "../pages/Settings/Settings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/students" element={<Students />} />

          <Route path="/teachers" element={<Teachers />} />

          <Route path="/classes" element={<Classes />} />

          <Route path="/subjects" element={<Subjects />} />

          <Route path="/attendance" element={<Attendance />} />

          <Route path="/grades" element={<Grades />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/users" element={<Users />} />

          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
