import React, { useState, useEffect } from 'react';
import CustomHeader from '../../CustomFields/CustomHeader';
import CustomTable from '../../CustomFields/CustomTable';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const BranchList = () => {
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
      "pin": "600003",
      "branchName": "Chennai",
      "city": "Chennai",
      "is_active": true,
    },
    {
      "id": 110,
      "emCode": "AVS113",
      "name": "Name",
      "pin": "400003",
      "branchName": "Mumbai",
      "city": "Mumbai",
      "is_active": false,
    },
    {
      "id": 111,
      "emCode": "AVS113",
      "name": "Name",
      "pin": "500003",
      "branchName": "Cochin",
      "city": "Mumbai",
      "is_active": true,
    },
    {
      "id": 110,
      "emCode": "AVS114",
      "name": "Name",
      "pin": "300003",
      "branchName": "Goa",
      "city": "Mumbai",
      "is_active": false,
    },
  ]


  const columns = [
    { header: 'Sol id', key: 'id' },
    { header: 'Branch Name', key: 'branchName' },
    { header: 'City', key: 'city' },
    { header: 'Pin', key: 'pin' },
    {
      header: 'Status',
      key: 'status',
      render: (row) => (row.isActive ? 'Active' : 'Inactive'),
    },
  ];
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

export default BranchList;
