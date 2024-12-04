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
  employeeId: yup.string().required('Employee ID is required'),
  employeeName: yup.string().required('Employee Name is required'),
  role: yup.string(),
  solId: yup.string().required('Sol ID is required'),
  branchName: yup.string().required('Branch Name is required'),
  status: yup.string().required('Status is required'),
});

const RMForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      employeeId: '',
      employeeName: '',
      role: '',
      solId: '',
      branchName: '',
      status: ''
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div>
      <CustomHeader
        text="RM Form" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1.5 gap-y-6">
          <TextInput
            name="employeeId"
            control={control}
            label="Employee ID"
            error={errors.employeeId}
            helperText={errors.employeeId?.message}
            isRequired={true}
          />
          <TextInput
            name="employeeName"
            control={control}
            label="Employee Name"
            error={errors.employeeName}
            helperText={errors.employeeName?.message}
            isRequired={true}
          />
          <TextInput
            name="role"
            control={control}
            label="Role"
            error={errors.role}
            helperText={errors.role?.message}
          />
          <TextInput
            name="solId"
            control={control}
            label="Sol ID"
            error={errors.solId}
            helperText={errors.solId?.message}
            isRequired={true}
          />
          <TextInput
            name="branchName"
            control={control}
            label="Branch Name"
            error={errors.branchName}
            helperText={errors.branchName?.message}
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

export default RMForm;
