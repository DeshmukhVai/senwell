import React from 'react'

const PasswordStrengthMeter = (props) => {

    const testedPassword=props.password;
    const createPasswordLabel =() =>{
      let score = 0
      let regexPositive = []
    }
  return (
    <div>
     <div className='progress' style={{height:'7px'}} >
         <div className='progress-bar w-50 ' style={changePasswordColor() }>

         </div>
     </div>
    </div>
  )
}

export default PasswordStrengthMeter
