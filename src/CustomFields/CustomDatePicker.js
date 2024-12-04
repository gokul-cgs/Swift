import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CustomDatePicker = ({ label, error = '', helperText = '', control, name, icon, isRequired, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            {...field}
            value={selectedDate}
            label={label + (isRequired ? '*' : '')}
            onChange={(date) => {
              setSelectedDate(date);
              field.onChange(date);
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default CustomDatePicker;
