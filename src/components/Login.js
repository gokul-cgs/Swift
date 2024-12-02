import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@mui/material';
import TextInput from '../CustomFields/TextInput';
import SelectInput from '../CustomFields/SelectInput';
import CheckboxInput from '../CustomFields/CheckboxInput';
import RadioInput from '../CustomFields/RadioInput';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { yupResolver } from '@hookform/resolvers/yup';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import config from '../utils/config';
import { decrypt, decryptUnifiedString, encrypt, test } from '../utils/security';
import axios from 'axios';
import Header from '../container/Header';

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});




const LoginForm = () => {
  const { control, handleSubmit, reset, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const navigate = useNavigate();


  useEffect(() => {
    console.log(config);
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [])

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         console.log(latitude, longitude);

  //       },
  //       (error) => {
  //         console.error('Error getting user location:', error);
  //       }
  //     );
  //   }




  // }, [])


  const onSubmit = (data) => {
    console.log('Form Data:', data);



    const dataToSend = {
      "login": data?.username.toString().trim(),
      "password": data?.password
    }
    let encrypted = encrypt(dataToSend)
    console.log(encrypted);


    axios.post('http://13.127.57.152:8013/' + 'login', encrypt(dataToSend))
      .then(res => {
        console.log(res);
        
        const dCrpted = (res?.data?.data);
        console.log(dCrpted);
        
        localStorage.setItem('isAuthenticated', 'true')
        navigate('/dashboard')
       
        if (dCrpted.success) {
          localStorage.setItem('isAuthenticated', 'true')
          navigate('/dashboard')
        }
        // if (dCrpted.success) {
        //   if (dCrpted.data.is_reset_password) {
        //     toast.warn("Please Update your Password");
        //     this.props.history.push({
        //       pathname: '/change_password',
        //       search: '?token=' + dCrpted.data.auth_token,
        //       state: { detail: dCrpted.data }
        //     })
        //   } else {
        //     if (this.state.rememberMe) {
        //       const getMinute = new Date();
        //       const setMinute = new Date();
        //       let setAttribute = ''
        //       setMinute.setMinutes(getMinute.getMinutes() + 30);
        //       const cuname = this.state.username;
        //       const cpassword = this.state.password;
        //       const ecString1 = encryptUnifiedString(cuname);
        //       const ecString2 = encryptUnifiedString(cpassword);
        //       if (window.location.protocol === 'https:') {
        //         setAttribute = ';Secure' + ';HttpOnly'
        //       }
        //       document.cookie = "Username=" + ecString1 + ';expires=' + setMinute + ';SameSite=Lax' + ';path=/' + setAttribute ;
        //       document.cookie = "Password=" + ecString2 + ';expires=' + setMinute + ';SameSite=Lax' + ';path=/' + setAttribute;
        //       // + ';Secure' + ';HttpOnly'
        //     }
        //     // if (true) {
        //     if (dCrpted.data.is_branch_connect && ((dCrpted.data.c_status === '' || dCrpted.data.c_status === null) && (dCrpted.data.user_type === "DL" || dCrpted.data.user_type === "BM"))) {
        //       this.props.history.push({
        //         pathname: '/updatecontactdetail',
        //         state: { detail: dCrpted.data, token: dCrpted.data.token, encrypted_data: res.data.data }
        //       })
        //     }
        //     else {
        //       (process.env.REACT_APP_BROWSING === 'true') ? sessionStorage.setItem("axisUserData", JSON.stringify(res.data.data)) : localStorage.setItem("axisUserData", JSON.stringify(res.data.data));
        //       localStorage.setItem("popup", JSON.stringify(true))
        //       this.props.setConfigUrls({
        //         attachment_url : user_data?.attachment_url,
        //         js_report_url : user_data?.js_report_url,
        //         opt_url : user_data?.opt_url,
        //         connect_plus_ipo_url : user_data?.connect_plus_ipo_url,
        //         report_base_url : user_data?.connect_plus_base_url,
        //     })
        //       const copyPermission = this.context;
        //       copyPermission.loadPermissions();
        //       //const userdata = userData(); //<- Don't Delete this or Comment
        //       if (dCrpted.data.is_admin || dCrpted.data.is_ops) {
        //         this.props.history.push('/dashboard')
        //       } else {
        //         if (dCrpted.data.is_primary_manager && window.location.href.toLowerCase().includes('redirecturl=contactapproval'))
        //           this.props.history.push('/contactapproval')
        //         else
        //           this.props.history.push('/search')
        //       }
        //     }
        //   }
        // } else {
        //   toast.error(dCrpted.message);
        // }
      })
      .catch(err => {
        console.log(err);
        toast.error("Something Went Wrong");
      })
  }


  const handleReset = () => {
    reset()
  }

  return (
    <>
      <Header></Header>
      <div className='w-full flex justify-center h-full items-center'  style={{height: '80vh'}}>
        <div className='grid grid-cols-2 gap-4' style={{ height: '500px' }}>
          <div className='bg-slate-500'>

          </div>
          <div className='shadow-lg p-4'>
            <div className='w-full text-center'>
              <p className='text-2xl'>Scanned Workflow for Form Inward and Tracking</p>
              <p className='text-3xl mt-2'>{`(SWIFT)`}</p>
              <p className='mt-4'>Login</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-3'>
              <TextInput
                name="username"
                control={control}
                label="Username"
                error={errors.username}
                helperText={errors.username ? errors.username.message : ''}
                icon={<AccountCircleIcon />}
              />

              <TextInput
                name="password"
                control={control}
                label="Password"
                type="password"
                error={errors.password}
                helperText={errors.password ? errors.password.message : ''}
                icon={<VpnKeyIcon />}
              />

              <div className='flex justify-center gap-4 mt-1'>
                <Button type="submit" variant="contained" className='!bg-themeColor !w-40'>Login</Button>
                <Button onClick={() => handleReset()} variant='outlined' className='!w-40 !border-gray-400 !text-gray-400'>Cancel</Button>
              </div>
              <div className='w-full text-center mt-4'>
                <Link to="/dashboard" className='!text-themeColor'>Forgot/Change Your Password ?</Link>;
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;




{/* <TextInput
        name="email"
        control={control}
        label="Email"
        type="email"
        error={errors.email}
        helperText={errors.email ? errors.email.message : ''}
        icon={<EmailIcon />}
      />

       <SelectInput
              name="country"
              control={control}
              label="Country"
              options={[
                { label: 'India', value: 'IN' },
                { label: 'USA', value: 'US' },
              ]}
              error={errors.country}
              helperText={errors.country ? errors.country.message : ''}
            />

      <CheckboxInput
        name="acceptTerms"
        control={control}
        label="Accept Terms"
        error={errors.acceptTerms}
        helperText={errors.acceptTerms ? errors.acceptTerms.message : ''}
      />

      <RadioInput
        name="gender"
        control={control}
        label="Gender"
        options={[
          { label: 'Male', value: 'M' },
          { label: 'Female', value: 'F' },
        ]}
        error={errors.gender}
        helperText={errors.gender ? errors.gender.message : ''}
      /> */}