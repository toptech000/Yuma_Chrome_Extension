import React from 'react';
import { Outlet } from 'react-router-dom';

import "./global.css";

export default function App() {
  return (
    <div className='app'>
      <Outlet />
    </div>
  );
}
