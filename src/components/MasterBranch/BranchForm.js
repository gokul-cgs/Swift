import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../../CustomFields/TextInput';
import SelectInput from '../../CustomFields/SelectInput';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import { Button } from '@mui/material';
import CustomHeader from '../../CustomFields/CustomHeader';

const validationSchema = yup.object({
  solId: yup.string().required('Sol ID is required'),
  branchName: yup.string().required('Branch Name is required'),
  branchZone: yup.string(),
  address1: yup.string(),
  address2: yup.string(),
  address3: yup.string(),
  city: yup.string(),
  state: yup.string(),
  country: yup.string(),
  pin: yup.string(),
  brHead: yup.string(),
  brHeadTel: yup.string(),
  boardNo: yup.string(),
  fax1: yup.string(),
  opHead: yup.string(),
  opHeadTel: yup.string(),
  branchCat: yup.string(),
  headquaters: yup.string(),
  circleHead: yup.string(),
  branchType: yup.string(),
  hubCode: yup.string(),
  hubName: yup.string(),
  circleId: yup.string(),
  branchHeadEmail: yup.string(),
  opHeadEmail: yup.string(),
  circleName: yup.string(),
  micr: yup.string(),
  micrSortCode: yup.string(),
  ifscCode: yup.string(),
  dematBranch: yup.string(),
  status: yup.string().required('Status is required'),
});

const BranchForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      solId: '',
      branchName: '',
      branchZone: '',
      address1: '',
      address2: '',
      address3: '',
      city: '',
      state: '',
      country: '',
      pin: '',
      brHead: '',
      brHeadTel: '',
      boardNo: '',
      fax1: '',
      opHead: '',
      opHeadTel: '',
      branchCat: '',
      headquaters: '',
      circleHead: '',
      branchType: '',
      hubCode: '',
      hubName: '',
      circleId: '',
      branchHeadEmail: '',
      opHeadEmail: '',
      circleName: '',
      micr: '',
      micrSortCode: '',
      ifscCode: '',
      dematBranch: '',
      status: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div>

      <CustomHeader
        text="Branch Form" />
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1.5 gap-y-6">
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
          <TextInput
            name="branchZone"
            control={control}
            label="Branch Zone"
            error={errors.branchZone}
            helperText={errors.branchZone?.message}
          />
          <TextInput
            name="address1"
            control={control}
            label="Address 1"
            error={errors.address1}
            helperText={errors.address1?.message}
          />
          <TextInput
            name="address2"
            control={control}
            label="Address 2"
            error={errors.address2}
            helperText={errors.address2?.message}
          />
          <TextInput
            name="address3"
            control={control}
            label="Address 3"
            error={errors.address3}
            helperText={errors.address3?.message}
          />
          <TextInput
            name="city"
            control={control}
            label="City"
            error={errors.city}
            helperText={errors.city?.message}
          />
          <TextInput
            name="state"
            control={control}
            label="State"
            error={errors.state}
            helperText={errors.state?.message}
          />
          <TextInput
            name="country"
            control={control}
            label="Country"
            error={errors.country}
            helperText={errors.country?.message}
          />
          <TextInput
            name="pin"
            control={control}
            label="Pin"
            error={errors.pin}
            helperText={errors.pin?.message}
          />
          <TextInput
            name="brHead"
            control={control}
            label="Branch Head"
            error={errors.brHead}
            helperText={errors.brHead?.message}
          />
          <TextInput
            name="brHeadTel"
            control={control}
            label="Branch Head Tel"
            error={errors.brHeadTel}
            helperText={errors.brHeadTel?.message}
          />
          <TextInput
            name="boardNo"
            control={control}
            label="Board No"
            error={errors.boardNo}
            helperText={errors.boardNo?.message}
          />
          <TextInput
            name="fax1"
            control={control}
            label="Fax 1"
            error={errors.fax1}
            helperText={errors.fax1?.message}
          />
          <TextInput
            name="opHead"
            control={control}
            label="Operation Head"
            error={errors.opHead}
            helperText={errors.opHead?.message}
          />
          <TextInput
            name="opHeadTel"
            control={control}
            label="Operation Head Tel"
            error={errors.opHeadTel}
            helperText={errors.opHeadTel?.message}
          />
          <TextInput
            name="branchCat"
            control={control}
            label="Branch Category"
            error={errors.branchCat}
            helperText={errors.branchCat?.message}
          />
          <TextInput
            name="headquaters"
            control={control}
            label="Headquarters"
            error={errors.headquaters}
            helperText={errors.headquaters?.message}
          />
          <TextInput
            name="circleHead"
            control={control}
            label="Circle Head"
            error={errors.circleHead}
            helperText={errors.circleHead?.message}
          />
          <TextInput
            name="branchType"
            control={control}
            label="Branch Type"
            error={errors.branchType}
            helperText={errors.branchType?.message}
          />
          <TextInput
            name="hubCode"
            control={control}
            label="Hub Code"
            error={errors.hubCode}
            helperText={errors.hubCode?.message}
          />
          <TextInput
            name="hubName"
            control={control}
            label="Hub Name"
            error={errors.hubName}
            helperText={errors.hubName?.message}
          />
          <TextInput
            name="circleId"
            control={control}
            label="Circle ID"
            error={errors.circleId}
            helperText={errors.circleId?.message}
          />
          <TextInput
            name="branchHeadEmail"
            control={control}
            label="Branch Head Email"
            error={errors.branchHeadEmail}
            helperText={errors.branchHeadEmail?.message}
          />
          <TextInput
            name="opHeadEmail"
            control={control}
            label="Operation Head Email"
            error={errors.opHeadEmail}
            helperText={errors.opHeadEmail?.message}
          />
          <TextInput
            name="circleName"
            control={control}
            label="Circle Name"
            error={errors.circleName}
            helperText={errors.circleName?.message}
          />
          <TextInput
            name="micr"
            control={control}
            label="MICR"
            error={errors.micr}
            helperText={errors.micr?.message}
          />
          <TextInput
            name="micrSortCode"
            control={control}
            label="MICR Sort Code"
            error={errors.micrSortCode}
            helperText={errors.micrSortCode?.message}
          />
          <TextInput
            name="ifscCode"
            control={control}
            label="IFSC Code"
            error={errors.ifscCode}
            helperText={errors.ifscCode?.message}
          />
          <TextInput
            name="dematBranch"
            control={control}
            label="Demat Branch"
            error={errors.dematBranch}
            helperText={errors.dematBranch?.message}
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

export default BranchForm;
