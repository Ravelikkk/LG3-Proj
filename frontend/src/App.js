import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import MainFooter from './components/MainFooter';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
   <>
   <header>
      <MainNavbar />
   </header>
   <main>
      <Outlet />
   </main>
   <footer>
      <MainFooter />
   </footer>
   </>
  );
}

export default App;
