import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Controller } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const TextInput = ({ label, error ='', helperText = '', control, name, icon, type,...props }) => {
  // State to toggle password visibility, only applies if type is 'password'
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label + (props?.isRequired ? '*' : '')}
          fullWidth
          variant="outlined"
          margin="normal"
          type={type === 'password' && showPassword ? 'text' : type}
          error={!!error}
          helperText={helperText}
          className='!m-0'
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleClickShowPassword}>
                  {type === 'password' ? (showPassword ? <VisibilityOff /> : <Visibility />) : icon}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...props}
        />
      )}
    />
  );
};

export default TextInput;
