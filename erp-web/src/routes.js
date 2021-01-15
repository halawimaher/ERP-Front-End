import Dashboard from "views/Dashboard.js";
import Employees from "views/Employees";
import Reports from "views/Reports";
import TeamsList from "views/TeamsList";
import ProjectsList from "views/ProjectsList";
import CreateUser from "views/CreateUser.js";
import UserProfile from "views/UserProfile.js";
import KPIS from "views/KPIS";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/employees",
    name: "employees",
    icon: "tim-icons icon-single-02",
    component: Employees,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "tim-icons icon-user-run",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/new-profile",
    name: "New Staff Member",
    icon: "tim-icons icon-badge",
    component: CreateUser,
    layout: "/admin",
  },
  {
    path: "/teams",
    name: "Teams",
    icon: "tim-icons icon-notes",
    component: TeamsList,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: " tim-icons icon-single-copy-04",
    component: ProjectsList,
    layout: "/admin",
  },
  {
    path: "/kpis",
    name: "KPI Metrics",
    icon: "tim-icons icon-bullet-list-67",
    component: KPIS,
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "tim-icons icon-chart-bar-32",
    component: Reports,
    layout: "/admin",
  },
];
export default routes;
