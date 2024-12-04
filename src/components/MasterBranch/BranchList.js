import React from 'react';
import CustomHeader from '../../CustomFields/CustomHeader';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const BranchList = () => {
  const navigate = useNavigate();
  const navigateFnuc = (route) => {
    navigate(route);
  };

  return (
    <div>
      <CustomHeader
        text="Branch List"
        endItems={[
          {
            text: 'Upload Branch',
            onClick: () => navigateFnuc("/branch_file_upload_form"),
          },
          {
            text: 'New Branch',
            onClick: () => navigateFnuc("/branch_form"),
          }
        ]}
      />
      Branch List
    </div>
  );
};

export default BranchList;
