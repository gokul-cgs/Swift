import React from 'react';
import { Checkbox, FormControlLabel, FormHelperText, FormControl } from '@mui/material';
import { Controller } from 'react-hook-form';

const CheckboxInput = ({ label, error, control, name, helperText, ...props }) => {
  return (
    <FormControl component="fieldset" error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={field.value}
                {...props}
              />
            }
            label={label}
          />
        )}
      />
      {/* Display error message if checkbox is not checked */}
      {error && <FormHelperText>{helperText || error.message}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxInput;
