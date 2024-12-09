import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomTable = ({ 
  columns, 
  data, 
  handleNavigate, 
  handleDeleteClick, 
  pagination, 
  updateStateField 
}) => {

  const { totalPages, activePage, listPaginationCount } = pagination;

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="!bg-themeColor">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2 text-left text-white">
                {column.header}
              </th>
            ))}
            <th className="border border-gray-300 px-4 py-2 text-center text-white">Action</th>
          </tr>
        </thead>
        <tbody className="boxShadow">
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 px-4 py-2">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <EditIcon
                    className="text-blue-500 cursor-pointer hover:text-blue-600 mr-4"
                    onClick={() => handleNavigate(row)}
                    titleAccess="Edit"
                  />
                  <DeleteIcon
                    className="text-red-500 cursor-pointer hover:text-red-600"
                    onClick={() => handleDeleteClick(row.id)}
                    titleAccess="Delete"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-between">
        <span>{listPaginationCount} records found</span>
        <div className="flex items-center">
          <Pagination
            count={totalPages}
            page={activePage}
            siblingCount={1}
            boundaryCount={1}
            onChange={(event, value) => updateStateField({ activePage: value })}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                className={`${item.page === activePage
                  ? '!bg-themeColor !text-white'
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
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
