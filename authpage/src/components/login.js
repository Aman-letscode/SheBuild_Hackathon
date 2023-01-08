import React from 'react';
import { Avatar, Grid, Link, Paper, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './login.css'
import { useState } from 'react';


const Login=({handleChange})=>{
  
  const [phone,setPhoneNo]=useState("");
  const [password,setpass]=useState("");
  const paperStyle={padding: 20, height: '77vh', width: 300, margin: "20px auto"}
  const avatarStyle={backgroundColor: '#26baab'}
  const handleSubmit= (e)=>{
    e.preventDefault();
    const detail ={phone,password}
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


  return(
    <Grid>
      <Paper style={paperStyle}>
        <Grid align= 'center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <h2>Sign in</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
        <input name='PhoneNo.'  fullWidth placeholder="Enter your phone number" required className='login-text' value={phone} onChange={(e)=>setPhoneNo(e.target.value)} />
        <input name='Password'  placeholder="Password" variant="filled"  fullWidth required className='login-text' value={password} onChange={(e)=>setpass(e.target.value)}/>
        <br></br><input type='checkbox'></input>
        <button type='submit' className='btn btn-primary' >Sign In</button>
        </form>
        <Grid align="left">
        <Typography>
        <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link href="#" onClick={()=>handleChange("event", 1)} >
            Sign Up
          </Link> 
        </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Login;