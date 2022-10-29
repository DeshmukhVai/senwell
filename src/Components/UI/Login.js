import React, { useEffect, useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import{AiFillLock} from 'react-icons/ai';
import{FaUser} from 'react-icons/fa';

import PasswordStrengthMeter from './PasswordStrengthMeter';
import './Login.css'
var zxcvbn = require('zxcvbn')
const Login = () => {
    const initialValues = {email:'',password:''}
    const [formValues,setFormValues] = useState(initialValues)
    const [formError,setFormError]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const [score,setScore]=useState(0);
    const ChangeHandler =(e)=>{
       const {name,value} = e.target;
       setFormValues({...formValues,[name]:value})
       console.log(formValues)
    }

    const submitHandler =(e)=>{  
     e.preventDefault();
     setFormError(validate(formValues));
     setIsSubmit(true);
    }
    useEffect(()=>{
        console.log(formError);
      if(Object.keys(formError).length === 0 && isSubmit){
        console.log(formValues);
      }
    },[formError])
    const validate = (values) =>{
       const errors ={}
       const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
       if(!values.email){
        errors.email = 'Email is required!!'
       } else if (!regex.test(values.email)){
        errors.email = 'Enter Valid Email'
       }
       if(!values.password){
        errors.password = 'Password is required!!'
       } 
       return errors;
    }

    // const testStrengthPassword =(e)=>{
    //   console.log(e.target.value);
    //   if(e.target.value !== ''){
    //     let pass=zxcvbn(e.target.value);
    //    setScore(pass.score)
    //   } else{
    //     setScore(0)
    //   }
      
    // }
  return (
    <div className='card'>
    <div className='inner-card'>
        {Object.keys(formError).length === 0 && isSubmit ? (<div>Logged in Successfully</div>):('')}
        <form 
        onSubmit={submitHandler}
         >
      <h1>Welcome</h1>
      <p>Log in to your account to continue</p>
      <br/>  
       <div>
        <span className='icon'><FaUser/></span>
        <input type='text' name='email' value={formValues.email} className='rounded-pill'  placeholder='vaibhavi' onChange={ChangeHandler}/>
      
       </div><p className='text-danger'>{formError.email}</p>
       
       <div>
        <span className='icon'><AiFillLock/></span>
        
        <input type='password' name='password' value={formValues.password} className='rounded-pill' placeholder='******' onChange={ChangeHandler}/>
       </div>
        <span 
        className='strength-password' 
        data-score={score}
        />
       <p className='text-danger'>{formError.password}</p>
       <div>
         <a href='' className='card-a ms-4'>Forgot your password</a>
       </div>
       <div>
        <button className='rounded-pill mt-2' >Login</button>
       </div>
       <div>
        <p>Don't have an account? <a href='' className='text-black-50'>SignUp</a>
        </p>
       </div>
       <div className='footer-icons'>
        <AiFillFacebook/>
        <AiOutlineTwitter/>
        <AiFillLinkedin/>
       </div>
       
    </form>
  </div>
    </div>
  )
}

export default Login
