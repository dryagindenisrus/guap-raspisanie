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
    setPeriod(items.today);
    /* eslint-disable indent */
    const genereObject: ParamsFilterInput = {
      group: items.groups.filter((elem) => elem.name.includes(groupSt))[0] || {
          value: window.localStorage.getItem('selectedGroup')?.split('&')[1],
          name: window.localStorage.getItem('selectedGroup')?.split('&')[0],
        } || {
          value: -1,
          name: '- нет -',
        },
      prepod: items.prepods.filter((elem1) => elem1.name.includes(prepodSt))[0] || {
          value: window.localStorage.getItem('selectedPrepod')?.split('&')[1],
          name: window.localStorage.getItem('selectedPrepod')?.split('&')[0],
        } || {
          value: -1,
          name: '- нет -',
        },
      corpus: items.corpuses.filter((elem2) => elem2.name.includes(corpusSt))[0] || {
          value: window.localStorage.getItem('selectedCorpus')?.split('&')[1],
          name: window.localStorage.getItem('selectedCorpus')?.split('&')[0],
        } || {
          value: -1,
          name: '- нет -',
        },
      audit: items.audits.filter((elem3) => elem3.name.includes(auditSt))[0] || {
          value: window.localStorage.getItem('selectedAudit')?.split('&')[1],
          name: window.localStorage.getItem('selectedAudit')?.split('&')[0],
        } || {
          value: -1,
          name: '- нет -',
        },
    };
    setSidebarActive(false);
    setSearchValue({
      group: {
        value: genereObject.group?.value || -1,
        name: genereObject.group?.name || '- нет -',
      },
      prepod: {
        value: genereObject.prepod?.value || -1,
        name: genereObject.prepod?.name || '- нет -',
      },
      corpus: {
        value: genereObject.corpus?.value || -1,
        name: genereObject.corpus?.name || '- нет -',
      },
      audit: {
        value: genereObject.audit?.value || -1,
        name: genereObject.audit?.name || '- нет -',
      },
      today: items.today,
    });

    window.localStorage.setItem(
      'selectedGroup',
      genereObject.group.name + '&' + genereObject.group.value
    );
    window.localStorage.setItem(
      'selectedPrepod',
      genereObject.prepod.name + '&' + genereObject.prepod.value
    );
    window.localStorage.setItem(
      'selectedCorpus',
      genereObject.corpus.name + '&' + genereObject.corpus.value
    );
    window.localStorage.setItem(
      'selectedAudit',
      genereObject.audit.name + '&' + genereObject.audit.value
    );
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
