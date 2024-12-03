import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

const SelectInput = ({ label, error, helperText, control, name, options, fullWidth = false, ...props }) => {
  return (
    <FormControl fullWidth={fullWidth} error={!!error} variant="outlined" margin="normal" className='!m-0'>
      <InputLabel id={name}>{label + (props?.isRequired ? '*' : '')}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            labelId={name}
            label={label}
            {...props}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {error && <FormHelperText>{helperText || error.message}</FormHelperText>}
    </FormControl>
  );
};

export default SelectInput;
