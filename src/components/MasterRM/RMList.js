import React, { useState, useEffect } from 'react';
import CustomHeader from '../../CustomFields/CustomHeader';
import CustomTable from '../../CustomFields/CustomTable';
import CustomFileUpload from '../../CustomFields/CustomFileUpload';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';

const RMList = () => {
  useEffect(() => {
    updateStateField({
      'listItems': listItems,
      'listPaginationCount': listItems.length,
      'totalPages': Math.ceil(listItems.length / 10),
    })
  }, []);

  const navigate = useNavigate();
  const navigateFnuc = (route) => {
    console.log("clicked");
    navigate(route);
  };

  const [state, setState] = useState({
    listItems: [],
    activePage: 1,
    listPaginationCount: 0,
    totalPages: 1,
  });



  const updateStateField = (fields) => {
    setState((prevState) => ({
      ...prevState,
      ...fields
    }));
  };



  const handleNavigate = (value) => {
    navigate('/rm_form', {
      state: value
    });
  };
  const handleDeleteClick = (value) => {

  };

  const listItems = [
    {
      "id": 109,
      "emCode": "AVS112",
      "name": "Name",
      "desination": "Associate",
      "branchName": "Chennai",
      "is_active": true,
    },
    {
      "id": 110,
      "emCode": "AVS113",
      "name": "Name",
      "desination": "Manager",
      "branchName": "Mumbai",
      "is_active": false,
    },
    {
      "id": 111,
      "emCode": "AVS113",
      "name": "Name",
      "desination": "Business",
      "branchName": "Cochin",
      "is_active": true,
    },
    {
      "id": 110,
      "emCode": "AVS114",
      "name": "Name",
      "desination": "Business",
      "branchName": "Goa",
      "is_active": false,
    },
  ]


  const columns = [
    { header: 'Employee id', key: 'id' },
    { header: 'Employee Name', key: 'name' },
    { header: 'Role', key: 'desination' },
    { header: 'Branch Name', key: 'branchName' },
    {
      header: 'Status',
      key: 'status',
      render: (row) => (row.isActive ? 'Active' : 'Inactive'),
    },
  ];

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
       <CustomTable
        columns={columns}
        data={state.listItems}
        handleNavigate={handleNavigate}
        handleDeleteClick={handleDeleteClick}
        pagination={{
          totalPages: state.totalPages,
          activePage: state.activePage,
          listPaginationCount: state.listPaginationCount,
        }}
        updateStateField={updateStateField}
      />
    </div>
  );
};

export default RMList;
