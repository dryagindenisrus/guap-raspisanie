import React, { useContext, useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";

import { host } from "../..";
import {
  SidebarContext,
  ContextSidebar,
  Param,
  ContextObject,
  FilterContext,
  PeriodContext,
  ContextPeriod,
} from "../../App";
import styles from "./Filter.module.scss";

interface ParamsFilterInput {
  group: Param;
  prepod: Param;
  corpus: Param;
  audit: Param;
}

export const Filter = () => {
  const { setSearchValue } = useContext<ContextObject>(FilterContext);
  const { setPeriod } = useContext<ContextPeriod>(PeriodContext);
  const { setSidebarActive } = useContext<ContextSidebar>(SidebarContext);

  const [items, setItems] = useState<{
    groups: Array<Param>;
    prepods: Array<Param>;
    corpuses: Array<Param>;
    audits: Array<Param>;
    today: boolean;
  }>({ groups: [], prepods: [], corpuses: [], audits: [], today: false });

  useEffect(() => {
    fetch(host + "/api/v1/params")
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          setItems(json);
        });
      });
  }, []);

  const [groupSt, setGroupSt] = useState<string>("");
  const [prepodSt, setPrepodSt] = useState<string>("");
  const [corpusSt, setCorpusSt] = useState<string>("");
  const [auditSt, setAuditSt] = useState<string>("");

  const onClickEvent = () => {
    setSidebarActive(false);
    setPeriod(items.today);
    const genereObject: ParamsFilterInput = {
      group: items.groups.filter(
        (elem) => elem.name === groupSt.toUpperCase()
      )[0] || {
        value: -1,
        name: "",
      },
      prepod: items.prepods.filter((elem1) =>
        elem1.name.includes(prepodSt)
      )[0] || { value: -1, name: "" },
      corpus: items.corpuses.filter((elem2) =>
        elem2.name.includes(corpusSt)
      )[0] || { value: -1, name: "" },
      audit: items.audits.filter((elem3) =>
        elem3.name.includes(auditSt)
      )[0] || { value: -1, name: "" },
    };

    setCorpusSt(genereObject.group.name.replace("- нет -", ""));
    setPrepodSt(genereObject.prepod.name.replace("- нет -", ""));
    setCorpusSt(genereObject.corpus.name?.replace("- нет -", ""));
    setAuditSt(genereObject.audit.name.replace("- нет -", ""));

    setSearchValue({
      group: {
        value: genereObject.group?.value || -1,
        name: genereObject.group?.name || "",
      },
      prepod: {
        value: genereObject.prepod?.value || -1,
        name: genereObject.prepod?.name || "",
      },
      corpus: {
        value: genereObject.corpus?.value || -1,
        name: genereObject.corpus?.name || "",
      },
      audit: {
        value: genereObject.audit?.value || -1,
        name: genereObject.audit?.name || "",
      },
      today: items.today,
    });
  };

  return (
    <div className={styles.filters}>
      <span className={styles.title}>Фильтры</span>
      {/* <input
        value={groupSt}
        onChange={(event) => {
          setGroupSt(event.target.value);
        }}
        key="g"
        placeholder="группа"
      /> */}
      <SearchBar
        setParametr={setGroupSt}
        data={items.groups}
        placeholder="Группа..."
      />
      <SearchBar
        setParametr={setPrepodSt}
        data={items.prepods}
        placeholder="Преподаватель..."
      />
      <SearchBar
        setParametr={setCorpusSt}
        data={items.corpuses}
        placeholder="Корпус..."
      />
      <SearchBar
        setParametr={setAuditSt}
        data={items.audits}
        placeholder="Аудитория..."
      />

      {/* <input
        value={prepodSt}
        onChange={(event) => {
          setPrepodSt(event.target.value);
        }}
        key="p"
        placeholder="преподаватель"
      />
      <input
        value={corpusSt}
        onChange={(event) => {
          setCorpusSt(event.target.value);
        }}
        key="b"
        placeholder="курпус"
      />
      <input
        value={auditSt}
        onChange={(event) => {
          setAuditSt(event.target.value);
        }}
        key="r"
        placeholder="аудитория"
      /> */}
      <button onClick={() => onClickEvent()} className={styles.button64}>
        <span className={styles.text}>Найти</span>
      </button>
    </div>
  );
};
