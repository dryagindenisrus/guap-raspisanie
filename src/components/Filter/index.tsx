import React, { useContext, useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';

import { host } from '../..';
import {
  SidebarContext,
  ContextSidebar,
  Param,
  ContextObject,
  FilterContext,
  PeriodContext,
  ContextPeriod,
} from '../../App';
import styles from './Filter.module.scss';

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
    fetch(host + '/api/v1/params')
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          setItems(json);
        });
      });
  }, []);

  const [groupSt, setGroupSt] = useState<string>(
    window.localStorage.getItem('selectedGroup') || ''
  );
  const [prepodSt, setPrepodSt] = useState<string>(
    window.localStorage.getItem('selectedPrepod') || ''
  );
  const [corpusSt, setCorpusSt] = useState<string>(
    window.localStorage.getItem('selectedCorpus') || ''
  );
  const [auditSt, setAuditSt] = useState<string>(
    window.localStorage.getItem('selectedAudit') || ''
  );

  const onClickEvent = () => {
    setSidebarActive(false);
    setPeriod(items.today);
    const genereObject: ParamsFilterInput = {
      group: items.groups.filter((elem) => elem.name === groupSt.toUpperCase())[0] || {
        value: -1,
        name: '',
      },
      prepod: items.prepods.filter((elem1) => elem1.name.includes(prepodSt))[0] || {
        value: -1,
        name: '',
      },
      corpus: items.corpuses.filter((elem2) => elem2.name.includes(corpusSt))[0] || {
        value: -1,
        name: '',
      },
      audit: items.audits.filter((elem3) => elem3.name.includes(auditSt))[0] || {
        value: -1,
        name: '',
      },
    };

    setSearchValue({
      group: {
        value: genereObject.group?.value || -1,
        name: genereObject.group?.name || '',
      },
      prepod: {
        value: genereObject.prepod?.value || -1,
        name: genereObject.prepod?.name || '',
      },
      corpus: {
        value: genereObject.corpus?.value || -1,
        name: genereObject.corpus?.name || '',
      },
      audit: {
        value: genereObject.audit?.value || -1,
        name: genereObject.audit?.name || '',
      },
      today: items.today,
    });

    if (genereObject.group.name !== '- нет -') {
      window.localStorage.setItem('selectedGroup', genereObject.group.name);
    } else {
      window.localStorage.removeItem('selectedGroup');
    }
    if (genereObject.prepod.name !== '- нет -') {
      window.localStorage.setItem('selectedPrepod', genereObject.prepod.name);
    } else {
      window.localStorage.removeItem('selectedPrepod');
    }
    if (genereObject.corpus.name !== '- нет -') {
      window.localStorage.setItem('selectedCorpus', genereObject.corpus.name);
    } else {
      window.localStorage.removeItem('selectedCorpus');
    }
    if (genereObject.audit.name !== '- нет -') {
      window.localStorage.setItem('selectedAudit', genereObject.audit.name);
    } else {
      window.localStorage.removeItem('selectedAudit');
    }
  };

  return (
    <div className={styles.filters}>
      <span className={styles.title}>Фильтры</span>
      <span className={styles.label}>Группа</span>
      <SearchBar
        selected="Group"
        key="g"
        setParametr={setGroupSt}
        data={items.groups}
        placeholder="Группа..."
      />
      <span className={styles.label}>Преподаватель</span>
      <SearchBar
        selected="Prepod"
        key="p"
        setParametr={setPrepodSt}
        data={items.prepods}
        placeholder="Преподаватель..."
      />
      <span className={styles.label}>Корпус</span>
      <SearchBar
        selected="Corpus"
        key="b"
        setParametr={setCorpusSt}
        data={items.corpuses}
        placeholder="Корпус..."
      />
      <span className={styles.label}>Аудитория</span>
      <SearchBar
        selected="Audit"
        key="r"
        setParametr={setAuditSt}
        data={items.audits}
        placeholder="Аудитория..."
      />
      <button key="btn" onClick={() => onClickEvent()} className={styles.button64}>
        <span className={styles.text}>Найти</span>
      </button>
    </div>
  );
};
