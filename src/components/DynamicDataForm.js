import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../CustomFields/TextInput';
import SelectInput from '../CustomFields/SelectInput';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';

const validationSchema = yup.object({
  lovName: yup.string().required('LOV Name is required'),
  lovValue: yup.string().required('Value is required'),
  status: yup.string().required('Value is required'),
  isDynamic: yup.string().required('isDynamic is required'),
  daysRequired: yup.string().required('Days Required is required'),
  priorityCode: yup.string().required('Priority Code is required'),
  newExistCustomer: yup.string().required('New/Exist Customer is required'),
  scrutiny: yup.string().required('Scrutiny is required'),
  dataEntry: yup.string().required('Date Entry is required'),
  checker: yup.string().required('Checker is required'),
  mailToCustomer: yup.string().required('Mail To Customer is required'),
  smsToCustomer: yup.string().required('SMS To Customer is required'),
});

const DynamicDataForm = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      lovName: '',
      lovValue: '',
      status: '',
      isDynamic: '',
      daysRequired: '',
      priorityCode: '',
      newExistCustomer: '',
      scrutiny: '',
      dataEntry: '',
      checker: '',
      mailToCustomer: '',
      smsToCustomer: '',
    }
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
      <h3 className="text-lg font-bold mb-4">Dynamic Data Form</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectInput
          name="lovName"
          control={control}
          label="LOV Name*"
          options={[
            { label: 'Name1', value: 'na1' },
            { label: 'Name2', value: 'na2' },
          ]}
          error={errors.lovName}
          helperText={errors.lovName ? errors.lovName.message : ''}
        />
        <TextInput
          name="lovValue"
          control={control}
          label="Value*"
          error={errors.lovValue}
          helperText={errors.lovValue ? errors.lovValue.message : ''}
        />

        <SelectInput
          name="status"
          control={control}
          label="Status*"
          options={[
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
          ]}
          error={errors.status}
          helperText={errors.status ? errors.status.message : ''}
        />
        <SelectInput
          name="isDynamic"
          control={control}
          label="Is Dynamic"
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          error={errors.isDynamic}
          helperText={errors.isDynamic ? errors.isDynamic.message : ''}
        />

        <TextInput
          name="daysRequired"
          control={control}
          label="Days Required*"
          error={errors.daysRequired}
          helperText={errors.daysRequired ? errors.daysRequired.message : ''}
        />
        <TextInput
          name="priorityCode"
          control={control}
          label="Priority Code*"
          error={errors.priorityCode}
          helperText={errors.priorityCode ? errors.priorityCode.message : ''}
        />

        <SelectInput
          name="newExistCustomer"
          control={control}
          label="New/Exist Customer*"
          options={[
            { label: 'New', value: 'New' },
            { label: 'Exist', value: 'Exist' },
          ]}
          error={errors.newExistCustomer}
          helperText={errors.newExistCustomer ? errors.newExistCustomer.message : ''}
        />
        <SelectInput
          name="scrutiny"
          control={control}
          label="Scrutiny*"
          options={[
            { label: 'Pending', value: 'Pending' },
            { label: 'Completed', value: 'Completed' },
          ]}
          error={errors.scrutiny}
          helperText={errors.scrutiny ? errors.scrutiny.message : ''}
        />

        <SelectInput
          name="dataEntry"
          control={control}
          label="Data Entry*"
          options={[
            { label: 'Completed', value: 'Completed' },
            { label: 'Pending', value: 'Pending' },
          ]}
          error={errors.dataEntry}
          helperText={errors.dataEntry ? errors.dataEntry.message : ''}
        />
        <SelectInput
          name="checker"
          control={control}
          label="Checker*"
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          error={errors.checker}
          helperText={errors.checker ? errors.checker.message : ''}
        />

        <SelectInput
          name="mailToCustomer"
          control={control}
          label="Mail to Customer*"
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          error={errors.mailToCustomer}
          helperText={errors.mailToCustomer ? errors.mailToCustomer.message : ''}
        />
        <SelectInput
          name="smsToCustomer"
          control={control}
          label="SMS to Customer*"
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          error={errors.smsToCustomer}
          helperText={errors.smsToCustomer ? errors.smsToCustomer.message : ''}
        />
      </div>

      <div className="flex justify-center mt-10">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="ml-3 px-6 py-2 bg-gray-200 text-black rounded-lg shadow hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DynamicDataForm;
