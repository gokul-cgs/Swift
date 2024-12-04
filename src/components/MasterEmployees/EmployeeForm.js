import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../../CustomFields/TextInput';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import { Button } from '@mui/material';
import CustomHeader from '../../CustomFields/CustomHeader';
import CustomDatePicker from '../../CustomFields/CustomDatePicker';

const validationSchema = yup.object({
  branch: yup.string(),
  code: yup.string().required('Code is required'),
  location: yup.string(),
  employeeCode: yup.string().required('Employee Code is required'),
  name: yup.string().required('Name is required'),
  superViserName: yup.string(),
  grade: yup.string(),
  designation: yup.string(),
  department: yup.string(),
  emailCompany: yup.string().email('Invalid email').required('Email is required'),
  mobileNumber: yup
    .string()
    .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
    .required('Mobile number is required'),
  dateOfJoining: yup.string(),
  employmentStatus: yup.string().required('Employment Status is required'),
  dateOfResignation: yup.string(),
  lastWorkingDate: yup.string(),
  status: yup.string().required('Status is required'),
});

const EmployeeForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      branch: '',
      code: '',
      location: '',
      employeeCode: '',
      name: '',
      superViserName: '',
      grade: '',
      designation: '',
      department: '',
      emailCompany: '',
      mobileNumber: '',
      dateOfJoining: '',
      employmentStatus: '',
      dateOfResignation: '',
      lastWorkingDate: '',
      status: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div>

      <CustomHeader
        text="Employee Form" />
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1.5 gap-y-6">
          <TextInput
            name="branch"
            control={control}
            label="Branch"
            error={errors.branch}
            helperText={errors.branch?.message}
          />
          <TextInput
            name="code"
            control={control}
            label="Code"
            error={errors.code}
            helperText={errors.code?.message}
            isRequired={true}
          />
          <TextInput
            name="location"
            control={control}
            label="Location"
            error={errors.location}
            helperText={errors.location?.message}
          />
          <TextInput
            name="employeeCode"
            control={control}
            label="Employee Code"
            error={errors.employeeCode}
            helperText={errors.employeeCode?.message}
            isRequired={true}
          />
          <TextInput
            name="name"
            control={control}
            label="Name"
            error={errors.name}
            helperText={errors.name?.message}
            isRequired={true}
          />
          <TextInput
            name="superViserName"
            control={control}
            label="Supervisor Name"
            error={errors.superViserName}
            helperText={errors.superViserName?.message}
          />
          <TextInput
            name="grade"
            control={control}
            label="Grade"
            error={errors.grade}
            helperText={errors.grade?.message}
          />
          <TextInput
            name="department"
            control={control}
            label="Department"
            error={errors.department}
            helperText={errors.department?.message}
          />
          <TextInput
            name="designation"
            control={control}
            label="Designation"
            error={errors.designation}
            helperText={errors.designation?.message}
          />
          <TextInput
            name="emailCompany"
            control={control}
            label="Email Company"
            error={errors.emailCompany}
            helperText={errors.emailCompany?.message}
            isRequired={true}
          />
          <TextInput
            name="mobileNumber"
            control={control}
            label="Mobile Number"
            error={errors.mobileNumber}
            helperText={errors.mobileNumber?.message}
            isRequired={true}
          />
          <CustomDatePicker
            name="dateOfJoining"
            control={control}
            label="Date of Joining"
            error={errors.dateOfJoining}
            helperText={errors.dateOfJoining?.message}
          />

          <TextInput
            name="employmentStatus"
            control={control}
            label="Employment Status"
            error={errors.employmentStatus}
            helperText={errors.employmentStatus?.message}
            isRequired={true}
          />
          <CustomDatePicker
            name="dateOfResignation"
            control={control}
            label="Date of Resignation"
            error={errors.dateOfResignation}
            helperText={errors.dateOfResignation?.message}
          />
          <CustomDatePicker
            name="lastWorkingDate"
            control={control}
            label="Last Working Date"
            error={errors.lastWorkingDate}
            helperText={errors.lastWorkingDate?.message}
          />
          <TextInput
            name="status"
            control={control}
            label="Status"
            error={errors.status}
            helperText={errors.status?.message}
            isRequired={true}
          />

        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button type="submit" variant="contained" className="!bg-themeColor !w-40">
            Submit
          </Button>
          <Button onClick={() => reset()} variant="outlined" className="!w-40 !border-gray-400 !text-gray-400">
            Cancel
          </Button>
        </div>
      </form>
    </div>

  );
};

export default EmployeeForm;
