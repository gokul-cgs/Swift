import CaseSummary from "../components/CaseSummary";
import Dashboard from "../components/Dashboard";
import DynamicDataForm from "../components/DynamicDataForm";
import RejectionReason from "../components/RejectionReason";
import EmployeeForm from "../components/MasterEmployees/EmployeeForm";
import EmployeeList from "../components/MasterEmployees/EmployeeList";
import EmployeeFileUploadForm from "../components/MasterEmployees/EmployeeFileUploadForm";
import RMForm from "../components/MasterRM/RMForm";
import RMList from "../components/MasterRM/RMList";
import RMFileUploadForm from "../components/MasterRM/RMFileUploadForm";
import BranchForm from "../components/MasterBranch/BranchForm";
import BranchList from "../components/MasterBranch/BranchList";
import BranchFileUploadForm from "../components/MasterBranch/BranchFileUploadForm";
import BaCodeList from "../components/MasterBaCode/BaCodeList";
import BaCodeForm from "../components/MasterBaCode/BaCodeForm";
import BaCodeFileUploadForm from "../components/MasterBaCode/BaCodeFileUploadForm"; 
import EmailList from "../components/MasterEmail/EmailList"; 
import Admin from "../components/Admin";

const ProtectedRoutes = [
  { route: "dashboard", name: "Dashboard", component: Dashboard },
  { route: "admin", name: "Admin", component: Admin },
  { route: "case_summary", name: "Case Summary", component: CaseSummary },
  { route: "rejection_reason", name: "Rejection Reason", component: RejectionReason },
  { route: "dynamic_data_form", name: "Dynamic Data Form", component: DynamicDataForm },
  { route: "employee_form", name: "Employee Form", component: EmployeeForm },
  { route: "employee_list", name: "Employee List", component: EmployeeList },
  { route: "rm_form", name: "RM Form", component: RMForm },
  { route: "branch_form", name: "Branch Form", component: BranchForm },
  { route: "rm_list", name: "RM List", component: RMList },
  { route: "branch_list", name: "Branch List", component: BranchList },
  { route: "rm_file_upload_form", name: "RM File Upload Form", component: RMFileUploadForm },
  { route: "branch_file_upload_form", name: "Branch File Upload Form", component: BranchFileUploadForm },
  { route: "employee_file_upload_form", name: "Employee File Upload Form", component: EmployeeFileUploadForm },
  { route: "bacode_list", name: "Bacode List", component: BaCodeList },
  { route: "bacode_file_upload_form", name: "Bacode File Upload Form", component: BaCodeFileUploadForm },
  { route: "bacode_form", name: "Bacode Form", component: BaCodeForm },
  { route: "email_list", name: "Email List", component: EmailList },
];

const sideBarMenu = [
  'dashboard',
  'case_summary',
  'admin'
]

export { ProtectedRoutes, sideBarMenu };
