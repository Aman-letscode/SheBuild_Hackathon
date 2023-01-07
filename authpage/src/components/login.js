import React from 'react'
import Button from '@mui/material/Button';
import { Avatar, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Login=({handleChange})=>{
  const paperStyle={padding: 20, height: '77vh', width: 300, margin: "20px auto"}
  const avatarStyle={backgroundColor: '#26baab'}
  const btnStyle={margin: '8px 0'}
  const marginTop = { margin: 5 }

  return(
    <Grid>
      <Paper style={paperStyle}>
        <Grid align= 'center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <h2>Sign in</h2>
        </Grid>
        <TextField id="filled-basic" label="Firstname" variant="filled"  fullWidth required/>
        <TextField id="filled-basic" label="Lastname" variant="filled"  fullWidth required/>
        <TextField id="filled-basic" label="Phone Number" variant="filled" fullWidth placeholder="Enter your phone number" required />
        <TextField id="filled-basic" label="Password" type='password' variant="filled"  fullWidth required/>
        <FormControl component="fieldset" style={marginTop}>
            <FormLabel id="demo-controlled-radio-buttons-group">Is this your first pregnancy?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group" style={{ display: 'initial' }} required>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        <Button type="submit" color='primary' variant="contained" style={btnStyle} fullWidth>Sign in</Button>
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