import React from "react";
import { useState, useEffect, createContext } from "react";

import "./App.scss";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Timetable";
import { Navbar } from "./components/Navbar";
// import { getParams } from './parser';

export interface TimetableProps {
  active: boolean;
  raspisanie: Array<DayProps>;
}

export interface Lesson {
  count: string;
  time: string;
  name: string;
  type: string;
  prepod: string;
  location: string;
  period: string;
}
export type Para = Array<Lesson>;

export interface DayProps {
  day: string;
  lessons: Array<Para>;
}

export interface Param {
  value: number;
  name: string;
}

export interface ParamsFilter {
  group: Param;
  prepod: Param;
  corpus: Param;
  audit: Param;
}

export type TimeTable = Array<DayProps>;

export interface contextObject {
  searchValue: ParamsFilter;
  setSearchValue: React.Dispatch<React.SetStateAction<ParamsFilter>>;
}

export const FilterContext = createContext<contextObject>({
  searchValue: {
    group: { value: -1, name: "" },
    prepod: { value: -1, name: "" },
    corpus: { value: -1, name: "" },
    audit: { value: -1, name: "" },
  },
  setSearchValue: React.useState,
});

function App() {
  const [filter, setFilter] = useState<ParamsFilter>({
    group: { value: -1, name: "" },
    prepod: { value: -1, name: "" },
    corpus: { value: -1, name: "" },
    audit: { value: -1, name: "" },
  });

  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const [items, setItems] = useState<Array<any>>([]);

  useEffect(() => {
    fetch(
      `https://guap-raspisanie.duckdns.org/api/v1/rasp/${filter.group.value}/${filter.prepod.value}/${filter.corpus.value}/${filter.audit.value}`
    )
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          setItems(json);
        });
      });
  }, [filter]);

  function toggleSidebar(value: boolean) {
    setSidebarActive(value);
  }

  return (
    <div className="App">
      <FilterContext.Provider
        value={{ searchValue: filter, setSearchValue: setFilter }}
      >
        <Navbar active={sidebarActive} setActive={toggleSidebar} />
        <div className="content">
          <Sidebar active={sidebarActive} />
          <Content active={sidebarActive} raspisanie={items} />
        </div>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
