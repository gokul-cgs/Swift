import React from 'react';
import CustomHeader from '../../CustomFields/CustomHeader';
import CustomFileUpload from '../../CustomFields/CustomFileUpload';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';

const RMList = () => {
  const navigate = useNavigate();
  const navigateFnuc = (route) => {
    navigate(route);
  };

  return (
    <div>
      <CustomHeader
        text="RM List"
        endItems={[
          {
            text: 'Upload RM',
            onClick: () => navigateFnuc("/rm_file_upload_form"),
          },
          {
            text: 'New RM',
            onClick: () => navigateFnuc("/rm_form"),
          }
        ]}
      />
      RM List
    </div>
  );
};

export default RMList;
