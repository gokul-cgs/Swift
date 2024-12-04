import React from 'react';
import CustomHeader from '../../CustomFields/CustomHeader';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const navigate = useNavigate();
  const navigateFnuc = (route) => {
    console.log("clicked");
    navigate(route);
  };

  return (
    <div>
      <CustomHeader
        text="Employees List"
        endItems={[
          {
            text: 'Upload Employee',
            onClick: () => navigateFnuc("/employee_file_upload_form"),
          },
          {
            text: 'New Employee',
            onClick: () => navigateFnuc("/employee_form"),
          }
        ]}
      />
      Employee List
    </div>
  );
};

export default EmployeeList;
