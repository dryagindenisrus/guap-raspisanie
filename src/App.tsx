import React from 'react';
import { useState } from "react";

import './App.scss';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Timetable';
import { Navbar } from './components/Navbar';

function App() {

  const [ sidebarActive, setSidebarActive ] = useState<boolean>(false);

  function toggleSidebar(value: boolean) {
    setSidebarActive(value);
  }

  return (
    <div className="App">
      <Navbar active={sidebarActive} setActive={toggleSidebar}/>
      <div className="content">
        <Sidebar active={sidebarActive} />
        <Content active={sidebarActive} />
      </div>
    </div>
  );
}

export default App;
