//import Login from './components/login.js';
import React from 'react';
import Header from './Landingpage/Header';
import Page from './/Landingpage/Page'
import './App.css';
import SignInOutContainer from './containers';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import BasicTable from './components/BasicTable'

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
      <Route exact path='/dashboard' element={<><Header/><BasicTable />
      </>}>

      </Route>
    </Routes>
    </div>
  </Router>
   
  );
}

export default App;
