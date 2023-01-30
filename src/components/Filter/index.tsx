import React, { useContext, useState, useEffect } from "react";

import { contextObject, FilterContext, Param } from "../../App";
import styles from "./Filter.module.scss";

export const Filter = () => {
  const [items, setItems] = useState<{
    groups: Array<Param>;
    prepods: Array<Param>;
    corpuses: Array<Param>;
    audits: Array<Param>;
  }>({ groups: [], prepods: [], corpuses: [], audits: [] });

  const { searchValue, setSearchValue } =
    useContext<contextObject>(FilterContext);

  useEffect(() => {
    fetch("http://192.168.1.178:8000/api/v1/params")
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          setItems(json);
        });
      });
  }, [searchValue]);

  const [groupSt, setGroupSt] = useState<string>("");
  const [prepodSt, setPrepodSt] = useState<string>("");
  const [corpusSt, setCorpusSt] = useState<string>("");
  const [auditSt, setAuditSt] = useState<string>("");

  const onClickEvent = () => {
    setSearchValue({
      group: {
        value:
          items.groups.filter((elem) => elem.name.includes(groupSt))[0]
            ?.value || -1,
        name: groupSt,
      },
      prepod: {
        value:
          items.prepods.filter((elem1) => elem1.name.includes(prepodSt))[0]
            ?.value || -1,
        name: prepodSt,
      },
      corpus: {
        value:
          items.corpuses.filter((elem2) => elem2.name.includes(corpusSt))[0]
            ?.value || -1,
        name: corpusSt,
      },
      audit: {
        value:
          items.audits.filter((elem3) => elem3.name.includes(auditSt))[0]
            ?.value || -1,
        name: auditSt,
      },
    });
  };

  return (
    <div className={styles.filters}>
      <span className={styles.title}>Фильтры</span>
      <input
        value={groupSt}
        onChange={(event) => {
          setGroupSt(event.target.value);
        }}
        key="g"
        placeholder="группа"
      />
      <input
        value={prepodSt}
        onChange={(event) => {
          setPrepodSt(event.target.value);
          console.log(prepodSt);
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
      />
      <button onClick={() => onClickEvent()} className={styles.button64}>
        <span className={styles.text}>Найти</span>
      </button>
    </div>
  );
};
