import React from 'react';
import { Avatar, Grid, Link, Paper, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './login.css'
import { useState as UseState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login=({handleChange})=>{
  
  const navigate = useNavigate();
  const [phone,setPhoneNo]=UseState("");
  const [password,setpass]=UseState("");
  const [error,seterror]=UseState("");
  const paperStyle={padding: 20, height: '77vh', width: 300, margin: "20px auto"}
  const avatarStyle={backgroundColor: '#26baab'}

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const detail ={phone:phone,password:password}
    console.log(detail);
    // console.log(JSON.stringify(detail))
    console.log(detail)
    try{

    
    const response = await fetch("http://localhost:4000/api/user/login",{
      method:'POST',
      headers:{
        // 'Accept':'application/json',
        'Content-type':'application/json'
      },
      // body:detail
      body:JSON.stringify(detail)
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    } 
    const res = await response.json();
    sessionStorage.setItem('login',res.token);
    

    seterror(res.message);
    console.log(error)
    if(res.token){
      navigate("/dashboard")
    }
  }catch(err){
    console.log(err);
  }

  
}


  return(
    <>
    <div className='error'>
    <div className=''>
      <p className='error'>{error}</p>
      </div>
    </div>
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
        <button type='submit' className='btn btn-primary'  >Sign In</button>
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
    </>
  )
}

export default Login;