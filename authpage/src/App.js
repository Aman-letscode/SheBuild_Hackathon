//import Login from './components/login.js';
import React from 'react';
import Header from './Landingpage/Header';
import Page from './/Landingpage/Page'
import './App.css';
import SignInOutContainer from './containers';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Login } from '@mui/icons-material';
import Signup from './components/signup';

function App() {
  return (<Router>
<div className="App">
    <Routes>
      <Route exact path='/' element={<><Header/>
      <Page/></>}>

      </Route>
      <Route exact path='/login' element={<><Header/><SignInOutContainer/>
      </>}>

      </Route>
    </Routes>
    </div>
  </Router>
   
  );
}

export default App;
