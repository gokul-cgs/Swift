import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomFileUpload from '../../CustomFields/CustomFileUpload';
import CustomHeader from '../../CustomFields/CustomHeader';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import { Button } from '@mui/material';

const validationSchema = yup.object({
  uploadFile: yup.mixed().required("File is required"),
});

const BaCodeFileUploadForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      uploadFile: null,
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  const handleFileChange = (file) => {
    setValue("uploadFile", file);
    console.log('File selected:', file);
  };

  return (
    <div>
      <CustomHeader
        text="Bacode File Upload Form" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1.5 gap-y-6">
          <CustomFileUpload
            label="Upload File"
            name="uploadFile"
            control={control}
            error={errors.uploadFile}
            helperText={errors.uploadFile?.message}
            onFileChange={handleFileChange}
            isRequired={true}
          />
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <Button type="submit" variant="contained" className="!bg-themeColor !w-30">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BaCodeFileUploadForm;
