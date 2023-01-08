import React from "react"
import Button from '@mui/material/Button'
import { Avatar, Grid, Paper, input, Typography } from "@mui/material"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
//import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import './login.css'



const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#26baab' }
 // const marginTop = { margin: 5 }

  const [firstname,setName]=useState("");
  const [lastname,setLastName]=useState("");
  const [phone,setPhoneNo]=useState("");
  const [password,setpass]=useState("");
  const [cpassword,setcpass]=useState("");
  const handleSubmit= (e)=>{
    e.preventDefault();
    const detail ={firstname,lastname,phone,password,cpassword}
    fetch("",{
      method:'POST',
      headers:{
        'Accept':'verification/json',
        'Content-type':'verification/json'
      },
      body:JSON.stringify(detail)
    }).then((result)=>{ console.warn('result',result)
    })
  }


  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <input label="Firstname" type="text" variant="filled" fullWidth placeholder="Enter your firstname" value={firstname} required onChange={(e)=>setName(e.target.value)} className='login-text'/>
          <input label="Lastname" type="text" variant="filled" fullWidth placeholder="Enter your lastname" value={lastname} required onChange={(e)=>setLastName(e.target.value)} className='login-text'/>
          <input label="Phone Number" variant="filled" fullWidth placeholder="Enter your phone number" value={phone} required onChange={(e)=>setPhoneNo(e.target.value)} className='login-text'/>
          <input type="date"  variant="filled" fullWidth required className="login-text" />
          <input label="Password" variant="filled" fullWidth placeholder="Password should be of 6 characters."value={password} required onChange={(e)=>setpass(e.target.value)} className='login-text'/>
          <input label="Confirm Password" variant="filled"  placeholder="Confirm Password" fullWidth required value={cpassword} onChange={(e)=>setcpass(e.target.value)} className='login-text'/>
          <input type="address" label="Any special condition?" placeholder="Any Special Condition" variant="outlined" fullWidth required className='login-text' />
          <FormControlLabel control={<Checkbox name="checkedA" />} label="I accept the terms and conditions." required className='login-text'/>
          <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
        </form> 
      </Paper>
    </Grid>
  )
}
export default Signup;