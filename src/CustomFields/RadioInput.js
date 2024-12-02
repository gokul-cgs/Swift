import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, InputAdornment, IconButton } from '@mui/material';
import { Controller } from 'react-hook-form';

const RadioInput = ({ label, options, error, control, name , ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl component="fieldset" margin="normal" error={!!error}>
          <RadioGroup {...field} {...props}>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.value}
                control={<Radio />}
                label={
                  <>
                    {option.label}
                  </>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default RadioInput;
