import React, { useState, useEffect } from 'react';
import CustomHeader from '../../CustomFields/CustomHeader';
import CustomTable from '../../CustomFields/CustomTable';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
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
    navigate('/employee_form', {
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
      "is_active": true,
    },
    {
      "id": 110,
      "emCode": "AVS113",
      "name": "Name",
      "desination": "Manager",
      "is_active": false,
    },
    {
      "id": 111,
      "emCode": "AVS113",
      "name": "Name",
      "desination": "Business",
      "is_active": true,
    },
    {
      "id": 110,
      "emCode": "AVS114",
      "name": "Name",
      "desination": "Business",
      "is_active": false,
    },
  ]


  const columns = [
    { header: 'Employee Code', key: 'emCode' },
    { header: 'Name', key: 'name' },
    { header: 'Designation', key: 'desination' },
    {
      header: 'Status',
      key: 'status',
      render: (row) => (row.isActive ? 'Active' : 'Inactive'),
    },
  ];

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

export default EmployeeList;
