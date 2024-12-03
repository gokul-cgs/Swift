import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../CustomFields/TextInput';
import SelectInput from '../CustomFields/SelectInput';
import { useForm, Controller } from 'react-hook-form';
import { Col, Container, Row, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  }

  const handleCancel = (e) => {
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '20px' }}>
      <h3>Dynamic Data Form</h3>

      <Row>
        <Col md="6">
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
        </Col>
        <Col md="6">
          <TextInput
            name="lovValue"
            control={control}
            label="Value*"
            error={errors.lovValue}
            helperText={errors.lovValue ? errors.lovValue.message : ''}
          />
        </Col>
      </Row>

      <Row>
        <Col md="6">
          <SelectInput
            name="status"
            control={control}
            label="Status"
            options={[
              { label: 'Active', value: 'Active' },
              { label: 'Inactive', value: 'Inactive' },
            ]}
            error={errors.status}
            helperText={errors.status ? errors.status.message : ''}
          />
        </Col>
        <Col md="6">
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
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <TextInput
            name="daysRequired"
            control={control}
            label="Days Required*"
            error={errors.daysRequired}
            helperText={errors.daysRequired ? errors.daysRequired.message : ''}
          />
        </Col>
        <Col md="6">
          <TextInput
            name="priorityCode"
            control={control}
            label="Priority Code*"
            error={errors.priorityCode}
            helperText={errors.priorityCode ? errors.priorityCode.message : ''}
          />
        </Col>
      </Row>
      <Row>
        <Col md="6">
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
        </Col>
        <Col md="6">
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
        </Col>
      </Row>

      <Row>
        <Col md="6">
          <SelectInput
            name="dataEntry"
            control={control}
            label="Data Entry"
            options={[
              { label: 'Completed', value: 'Completed' },
              { label: 'Pending', value: 'Pending' },
            ]}
            error={errors.dataEntry}
            helperText={errors.dataEntry ? errors.dataEntry.message : ''}
          />
        </Col>
        <Col md="6">
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
        </Col>
      </Row>

      <Row>
        <Col md="6">
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
        </Col>
        <Col md="6">
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
        </Col>
      </Row>
      <div >
      <div className="d-flex justify-content-center align-items-center mt-10">
          <Button size="lg" type="submit" color="primary" className="border shadow-lg">Submit</Button>

          <Button size="lg" type="button" color="white" className="ms-3 border shadow-lg" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default DynamicDataForm;
