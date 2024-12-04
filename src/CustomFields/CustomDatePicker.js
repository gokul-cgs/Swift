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
            onChange={(date) => {
              setSelectedDate(date);
              field.onChange(date); 
            }}
            render={(params) => (
              <TextField
                {...params}
                label={label + (isRequired ? '*' : '')}
                fullWidth
                variant="outlined"
                margin="normal"
                error={!!error}
                helperText={helperText || error?.message}
                InputProps={{
                  ...params.InputProps,
                  readOnly: true,  // Makes the input field read-only
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        {icon || <CalendarTodayIcon />} 
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: selectedDate !== null || params?.inputProps?.value !== '', // Ensure label shrinks when there's a value
                }}
                {...props}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default CustomDatePicker;
