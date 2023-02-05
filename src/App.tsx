import React from 'react';
import { useState, createContext } from 'react';

import './App.scss';
import { Sidebar } from './components/Sidebar';
import { Timetable } from './components/Timetable';
import { Navbar } from './components/Navbar';
// import { getParams } from './parser';

export interface Lesson {
  ItemId: number;
  Week: number;
  Day: number;
  Less: number;
  Build: string;
  Rooms: string | null;
  Disc: string;
  Type: string;
  Groups: string;
  GroupsText: string;
  Preps: string | null;
  PrepsText: string;
  Dept: null;
}

export interface DayProps {
  day: number;
  lessons: Array<Lesson>;
}

export interface Param {
  ItemId: number;
  Name: string;
}

export interface ParamsFilter {
  group: Param;
  prepod: Param;
  today: boolean;
}

export type TimeTable = Array<DayProps>;

export interface ContextObject {
  searchValue: ParamsFilter;
  setSearchValue: React.Dispatch<React.SetStateAction<ParamsFilter>>;
}

export interface ContextSidebar {
  sidebarActive: boolean;
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContextPeriod {
  period: boolean;
  setPeriod: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<ContextSidebar>({
  sidebarActive: true,
  setSidebarActive: React.useState,
});

export const FilterContext = createContext<ContextObject>({
  searchValue: {
    group: { ItemId: -1, Name: '' },
    prepod: { ItemId: -1, Name: '' },
    // corpus: { ItemId: -1, Name: '' },
    // audit: { ItemId: -1, Name: '' },
    today: false,
  },
  setSearchValue: React.useState,
});

export const PeriodContext = createContext<ContextPeriod>({
  period: false,
  setPeriod: React.useState,
});

function App() {
  const [period, setPeriod] = useState<boolean>(false);
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const [filter, setFilter] = useState<ParamsFilter>({
    group: { ItemId: -1, Name: '' },
    prepod: { ItemId: -1, Name: '' },
    // corpus: { value: -1, name: '' },
    // audit: { value: -1, name: '' },
    today: false,
  });

  return (
    <div className="App">
      <FilterContext.Provider
        value={{ searchValue: filter, setSearchValue: setFilter }}
      >
        <PeriodContext.Provider value={{ period: period, setPeriod: setPeriod }}>
          <SidebarContext.Provider
            value={{
              sidebarActive: sidebarActive,
              setSidebarActive: setSidebarActive,
            }}
          >
            <Navbar />
            <div className="content">
              <Sidebar />
              <Timetable />
            </div>
          </SidebarContext.Provider>
        </PeriodContext.Provider>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
