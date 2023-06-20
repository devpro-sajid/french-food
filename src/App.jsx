import React from 'react';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
};

export default App;