import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Controller } from 'react-hook-form';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CancelIcon from '@mui/icons-material/Cancel';

const CustomFileUpload = ({ label, error = '', helperText = '', control, name, onFileChange, ...props }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile || null);
    onFileChange && onFileChange(selectedFile || null);
  };

  const handleFileRemove = (e) => {
    e.stopPropagation(); // Prevent file dialog from opening
    setFile(null);
    onFileChange && onFileChange(null);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          fullWidth
          variant="outlined"
          label={label + (props?.isRequired ? '*' : '')}
          value={file?.name || ''}
          error={!!error}
          helperText={helperText || error?.message}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                {file ? (
                  <IconButton
                    edge="end"
                    aria-label="cancel file"
                    onClick={handleFileRemove}
                  >
                    <CancelIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    edge="end"
                    component="label"
                    aria-label="upload file"
                    onClick={() => document.querySelector(`input[name="${name}"]`).click()}
                  >
                    <UploadFileIcon />
                  </IconButton>
                )}
                <input
                  type="file"
                  hidden
                  name={name}
                  onChange={handleFileChange}
                />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: file?.name ? true : false,
          }}
          {...props}
          className="!m-0"
          onClick={() => document.querySelector(`input[name="${name}"]`).click()}
        />
      )}
    />
  );
};

export default CustomFileUpload;
