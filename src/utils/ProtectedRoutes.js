import CaseSummary from "../components/CaseSummary";
import Dashboard from "../components/Dashboard";
import RejectionReason from "../components/RejectionReason";

const ProtectedRoutes = [
  { route: "dashboard", name: "Dashboard", component: Dashboard },
  { route: "case_summary", name: "Case Summary", component: CaseSummary },
  { route: "rejection_reason", name: "Rejection Reason", component: RejectionReason },
];

export default ProtectedRoutes;
