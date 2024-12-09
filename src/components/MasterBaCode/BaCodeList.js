import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomHeader from '../../CustomFields/CustomHeader';
import 'tailwindcss/tailwind.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { PaginationItem, Pagination, Button } from '@mui/material';
import CustomTable from '../../CustomFields/CustomTable';

const BaCodeList = () => {
  useEffect(() => {
    updateStateField({
      'listItems': roleData,
      'listPaginationCount': roleData.length,
      'totalPages': Math.ceil(roleData.length / 10),
    })
  }, []);

  const navigate = useNavigate();

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
    navigate('/bacode_form', {
      state: value
    });
  };
  const handleDeleteClick = (value) => {

  };

  const roleData = [
    {
      "id": 109,
      "bacode": "REFUNUR",
      "mailId": "mail@gmail.com",
      "empCode": "AADEER33",
      "is_active": true,
    },
    {
      "id": 110,
      "bacode": "BACODE",
      "mailId": "email@gmail.com",
      "empCode": "AADEER22",
      "is_active": true,
    },
    {
      "id": 110,
      "bacode": "BACODE",
      "mailId": "email@gmail.com",
      "empCode": "AADEER22",
      "is_active": true,
    },
    {
      "id": 110,
      "bacode": "BACODE",
      "mailId": "email@gmail.com",
      "empCode": "AADEER22",
      "is_active": true,
    },
    {
      "id": 110,
      "bacode": "BACODE",
      "mailId": "email@gmail.com",
      "empCode": "AADEER22",
      "is_active": true,
    },
  ]


  const columns = [
    { header: 'Bacode', key: 'bacode' },
    { header: 'Mail Id', key: 'mailId' },
    { header: 'Emp Code', key: 'empCode' },
    {
      header: 'Status',
      key: 'status',
      render: (row) => (row.isActive ? 'Active' : 'Inactive'),
    },
  ];

  return (
    <div>
      <CustomHeader
        text="BaCode List"
        endItems={[
          {
            text: 'Barcode Upload',
            onClick: () => navigate('/bacode_file_upload_form'),
          },
          {
            text: 'New Barcode',
            onClick: () => navigate('/bacode_form'),
          },
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

export default BaCodeList;
