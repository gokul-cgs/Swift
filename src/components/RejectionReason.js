import React from 'react'
import { userData } from '../utils/common';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectInput from '../CustomFields/SelectInput';
import * as yup from 'yup';
import { Button } from '@mui/material';
import TextInput from '../CustomFields/TextInput';

const validationSchema = yup.object({
    request_type: yup.string().required('Request Type is required'),
    rejection_value: yup.string().required('Rejection Value is required'),
    value: yup.string(),
    internal_or_external: yup.string().required('Internal / External is required'),
    status: yup.string().required('Status is required')
});

const RejectionReason = () => {
    const userdata = userData()
    const { control, handleSubmit, reset, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            request_type: '',
            rejection_value: '',
            value: '',
            internal_or_external: '',
            status: ''
        }
    });



    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-3'>
                <div className='grid grid-cols-2 gap-3'>
                    <SelectInput
                        isRequired
                        name="request_type"
                        control={control}
                        label="Request Type"
                        options={[
                            { label: 'India', value: 'IN' },
                            { label: 'USA', value: 'US' },
                        ]}
                        error={errors.request_type}
                        helperText={errors.request_type ? errors.request_type.message : ''}
                    />

                    <SelectInput
                        isRequired
                        name="rejection_value"
                        control={control}
                        label="Rejection Value"
                        options={[
                            { label: 'India', value: 'IN' },
                        ]}
                        error={errors.rejection_value}
                        helperText={errors.rejection_value ? errors.rejection_value.message : ''}
                    />

                    <TextInput
                        name="value"
                        control={control}
                        label="Value"
                    />

                    <SelectInput
                        isRequired
                        name="internal_or_external"
                        control={control}
                        label="Internal / External"
                        options={[
                            { label: 'India', value: 'IN' },
                        ]}
                        error={errors.internal_or_external}
                        helperText={errors.internal_or_external ? errors.rejection_value.internal_or_external : ''}
                    />

                    <SelectInput
                        isRequired
                        name="status"
                        control={control}
                        label="Status"
                        options={[
                            { label: 'India', value: 'IN' },
                        ]}
                        error={errors.status}
                        helperText={errors.status ? errors.rejection_value.status : ''}
                    />

                </div>

                <div className='flex justify-center gap-4 mt-5'>
                    <Button type="submit" variant="contained" className='!bg-themeColor !w-40'>Submit</Button>
                    <Button onClick={() => reset()} variant='outlined' className='!w-40 !border-gray-400 !text-gray-400'>Cancel</Button>
                </div>
            </form>
        </div>
    )
}

export default RejectionReason