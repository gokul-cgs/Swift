import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomHeader from '../../CustomFields/CustomHeader';
import 'tailwindcss/tailwind.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { PaginationItem, Pagination, Button } from '@mui/material';

const BaCodeList = () => {
  useEffect(() => {
    updateStateField({
      'listItems': roleData,
      'listPaginationCount': roleData.length
    })
  }, []);

  const navigate = useNavigate();

  const [state, setState] = useState({
    listItems: [],
    activePage: 1,
    listPaginationCount: 0,
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

  const totalPages = Math.ceil(state.listPaginationCount / 10);

  return (
    <div className="p-5">
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

      <div className="mt-6 overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="!bg-themeColor">

          </thead>
          <tbody className="boxShadow">
            <tr className="bg-themeColor">
              <td className="border border-gray-300 px-4 py-2 text-left text-white">Bacode</td>
              <td className="border border-gray-300 px-4 py-2 text-left text-white">Mail Id</td>
              <td className="border border-gray-300 px-4 py-2 text-left text-white">Emp Code</td>
              <td className="border border-gray-300 px-4 py-2 text-left text-white">Status</td>
              <td className="border border-gray-300 px-4 py-2 text-center text-white">Action</td>
            </tr>

            {state.listItems.length > 0 ? (
              state.listItems.map((role, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{role.bacode}</td>
                  <td className="border border-gray-300 px-4 py-2">{role.mailId}</td>
                  <td className="border border-gray-300 px-4 py-2">{role.empCode}</td>
                  <td className="border border-gray-300 px-4 py-2">{role.isActive ? 'Active' : 'Inactive'}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <EditIcon
                      className="text-blue-500 cursor-pointer hover:text-blue-600 mr-4"
                      onClick={() => handleNavigate(role)}
                      titleAccess="Edit"
                    />
                    <DeleteIcon
                      className="text-red-500 cursor-pointer hover:text-red-600"
                      // onClick={() => handleDeleteClick(row.id)}
                      titleAccess="Delete"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span>{state.listPaginationCount} records found</span>
        <div className="flex items-center">
          <Pagination
            count={totalPages}
            page={state.activePage}
            siblingCount={1}
            boundaryCount={1}
            onChange={(event, value) => updateStateField({
              'activePage': value
            })}
            renderItem={

              (item) => {
                return (
                  <PaginationItem
                    {...item}
                    className={`${item.page === state.activePage
                      ? '!bg-themeColor text-white'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                      } border border-gray-300 mx-1 rounded-md`}
                    style={{
                      minWidth: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                )
              }

            }
          />
        </div>
      </div>
    </div>
  );
};

export default BaCodeList;
