import React from 'react';
import CustomHeader from '../../CustomFields/CustomHeader';
import CustomFileUpload from '../../CustomFields/CustomFileUpload';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';

const BaCodeList = () => {
  const navigate = useNavigate();
  const navigateFnuc = (route) => {
    navigate(route);
  };

  return (
    <div>
      <CustomHeader
        text="Bacode List"
        endItems={[
          {
            text: 'Barcode Upload',
            onClick: () => navigateFnuc("/bacode_file_upload_form"),
          },
          {
            text: 'New Barcode',
            onClick: () => navigateFnuc("/bacode_form"),
          }
        ]}
      />
      Bacode List
    </div>
  );
};

export default BaCodeList;
