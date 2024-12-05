import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../../CustomFields/TextInput';
import SelectInput from '../../CustomFields/SelectInput';
import CustomHeader from '../../CustomFields/CustomHeader';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import { Button } from '@mui/material';

const validationSchema = yup.object({
  baCode: yup.string().required('Bacode is required'),
  mailId: yup.string().required('Mail Id is required'),
  empCode: yup.string().required('Emp Code is required'),
  status: yup.string().required('Status is required'),
});

const BaCodeForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      baCode: '',
      mailId: '',
      empCode: '',
      status: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div>
      <CustomHeader
        text="Bacode Form" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1.5 gap-y-6">
          <TextInput
            name="baCode"
            control={control}
            label="Bacode"
            error={errors.baCode}
            helperText={errors.baCode?.message}
            isRequired={true}
          />
          <TextInput
            name="mailId"
            control={control}
            label="Mail Id"
            error={errors.mailId}
            helperText={errors.mailId?.message}
            isRequired={true}
          />
          <TextInput
            name="empCode"
            control={control}
            label="Emp Code"
            error={errors.empCode}
            helperText={errors.empCode?.message}
            isRequired={true}
          />
          <SelectInput
            name="status"
            control={control}
            label="Status"
            options={[
              { label: 'Active', value: 'true' },
              { label: 'In Active', value: 'false' },
            ]}
            error={errors.status}
            isRequired={true}
            helperText={errors.status ? errors.status.message : ''}
          />
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <Button type="submit" variant="contained" className="!bg-themeColor !w-30">
            Submit
          </Button>
          <Button onClick={() => reset()} variant="outlined" className="!w-30 !border-gray-400 !text-gray-400">
            Cancel
          </Button>
        </div>
      </form>
    </div>

  );
};

export default BaCodeForm;
