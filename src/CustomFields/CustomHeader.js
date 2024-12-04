import React from 'react';
import { Button } from '@mui/material';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const CustomHeader = ({ icon, text, endItems, onIconClick }) => {
  const handleIconClick = onIconClick || (() => window.history.back());

  return (
    <div className="flex items-center justify-between pb-2 border-b !border-themeColor mb-5">
      <div className="flex items-center">
        <button onClick={handleIconClick} className="mr-3">
          {icon ? (
            React.cloneElement(icon, { style: { fontSize: "36px" } })
          ) : (
            <ReplyAllIcon style={{ fontSize: "26px" }} />
          )}
        </button>
        <h1 className="font-bold text-2xl">{text}</h1>
      </div>
      <div className="flex gap-4">
        {endItems &&
          endItems.map((item, index) => (
            <Button
              key={index}
              type="submit"
              variant="contained"
              className="!bg-themeColor"
              style={{ textTransform: 'none' }}
              onClick={item.onClick}
            >
              {item.text}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default CustomHeader;
