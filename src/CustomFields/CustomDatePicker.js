import React, { useState } from 'react';
import { TextField, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CustomDatePicker = ({ 
  label, 
  error, 
  helperText, 
  control, 
  name, 
  isRequired = false, 
  ...props 
}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div style={{ marginBottom: '16px', width: '100%' }}>
            <DatePicker
             className='w-full'
              {...field}
              {...props}
              label={label + (isRequired ? '*' : '')}
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                field.onChange(date);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label + (isRequired ? '*' : '')}
                  error={!!error}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {params.InputProps?.endAdornment}
                        <CalendarTodayIcon
                          style={{ marginLeft: '8px', cursor: 'pointer', color: '#757575' }}
                        />
                      </>
                    ),
                  }}
                />
              )}
            />
            {error && <FormHelperText error>{helperText || error.message}</FormHelperText>}
          </div>
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
