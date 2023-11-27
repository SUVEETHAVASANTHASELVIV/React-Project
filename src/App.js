import React from 'react';
import './App.css';
//import { Axios } from './components/axios';
import Routing from './components/Routing';
import AuthProvider from './components/useContextFiles/Admin';
//import Cards from './components/Cards';
//import Option from './components/Option'
const App = () => {
  return ( 
<AuthProvider>

<Routing/>
</AuthProvider>
  );
};

export default App;
