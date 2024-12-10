import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomHeader from '../../CustomFields/CustomHeader';
import 'tailwindcss/tailwind.css';
import CustomTable from '../../CustomFields/CustomTable';

const EmailList = () => {
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
      "id": 110,
      "bacode": "BACODE",
      "panNo": "BADEE22233",
      "emailSub": "Application Received App no 00011222299",
      "sendMailId": "email@gmail.com",
      "sendBCC": ["2email@gmail.com","1email@gmail.com",],
      "createDate": "22-10-2023",
      "emailStatus": true,
      "summaryId": "22211",
      "lastUpdateDate": "23-10-2023",
    },
    {
      "id": 111,
      "bacode": "BACODE123",
      "panNo": "BADEE22292",
      "emailSub": "Application Received App no 00011222299",
      "sendMailId": "1email@gmail.com",
      "sendBCC": "2email@gmail.com,email@gmail.com",
      "createDate": "22-10-2024",
      "emailStatus": "SENT",
      "summaryId": "22212",
      "lastUpdateDate": "23-10-2024",
    },
  ]


  const columns = [
    { header: 'Barcode', key: 'bacode' },
    { header: 'PAN No', key: 'panNo' },
    { header: 'Email Subject', key: 'emailSub' },
    { header: 'Send To', key: 'sendMailId' },
    { header: 'Send BCC', key: 'sendBCC'},
    { header: 'Create Date', key: 'createDate'},
    { header: 'Email Status', key: 'emailStatus'},
    { header: 'Late Update Date', key: 'lastUpdateDate'},
  ];

  return (
    <div>
      <CustomHeader
        text="Email List"
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

export default EmailList;
