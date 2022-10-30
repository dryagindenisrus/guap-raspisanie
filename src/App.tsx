import React from 'react';
import { useState } from "react";

import './App.scss';
import { Sidebar } from './components/Sidebar';
import { Timetable } from './components/Timetable';
import { Navbar } from './components/Navbar';

function App() {

  const [ sidebarActive, setSidebarActive ] = useState(false);


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar active={sidebarActive} setActive={setSidebarActive} />
        <Timetable />
      </div>
    </div>
  );
}

export default App;
