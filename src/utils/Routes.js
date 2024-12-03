import CaseSummary from "../components/CaseSummary";
import Dashboard from "../components/Dashboard";
import DynamicDataForm from "../components/DynamicDataForm";
import RejectionReason from "../components/RejectionReason";
import Admin from "../components/Admin";

const ProtectedRoutes = [
  { route: "dashboard", name: "Dashboard", component: Dashboard },
  { route: "admin", name: "Admin", component: Admin },
  { route: "case_summary", name: "Case Summary", component: CaseSummary },
  { route: "rejection_reason", name: "Rejection Reason", component: RejectionReason },
  { route: "dynamic-data-form", name: "Dynamic Data Form", component: DynamicDataForm },
];

const sideBarMenu = [
    'dashboard',
    'case_summary',
    'admin'
]

export {ProtectedRoutes, sideBarMenu};
