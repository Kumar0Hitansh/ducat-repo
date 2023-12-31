import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import "./modules/css/globle.css";
import Registorpage from './modules/auth/Registorpage';
import Landingpage from './modules/dashboard/Landingpage';
import Detailsuser from './modules/dashboard/Detailsuser';
import Editrecord from './modules/dashboard/Editrecord';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage/>}/>
          <Route path='registor' element={<Registorpage/>}/>
          <Route path='landing' element={<Landingpage/>}/>
          <Route path='view/:id' element={<Detailsuser/>}/>
          <Route path='edit/:id' element={<Editrecord/>}/>
        </Routes>


    </BrowserRouter>
  </React.StrictMode>
);
