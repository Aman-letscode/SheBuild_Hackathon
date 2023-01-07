import React from "react"
import Button from '@mui/material/Button'
import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
//import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';



const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#26baab' }
 // const marginTop = { margin: 5 }


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
        <form>
          <TextField id="filled-basic" label="Firstname" type="text" variant="filled" fullWidth placeholder="Enter your firstname" required/>
          <TextField id="filled-basic" label="Lastname" type="text" variant="filled" fullWidth placeholder="Enter your lastname" required />
          <TextField id="filled-basic" label="Phone Number" variant="filled" fullWidth placeholder="Enter your phone number" required />
          <TextField id="filled-basic" type="date"  variant="filled" fullWidth required />
          <TextField id="filled-basic" label="Password" variant="filled" fullWidth placeholder="Password should be of 6 characters." required />
          <TextField id="filled-basic" label="Confirm Password" variant="filled" fullWidth required />
          <TextField id="outlined-basic" type="address" label="Any special condition?" variant="outlined" fullWidth required/>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="I accept the terms and conditions." required/>
          <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
        </form>
      </Paper>
    </Grid>
  )
}
export default Signup;