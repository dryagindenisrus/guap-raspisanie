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
}

export interface semInfo {
  CurrentWeek: number;
}

export const Filter = () => {
  const { setSearchValue } = useContext<ContextObject>(FilterContext);
  const { setPeriod } = useContext<ContextPeriod>(PeriodContext);
  const { setSidebarActive } = useContext<ContextSidebar>(SidebarContext);

  const [items, setItems] = useState<{
    groups: Array<Param>;
    prepods: Array<Param>;
    today: boolean;
  }>({ groups: [], prepods: [], today: false });

  useEffect(() => {
    const arrParams: { groups: Array<Param>; prepods: Array<Param>; today: semInfo } = {
      groups: [],
      prepods: [],
      today: { CurrentWeek: 0 },
    };
    fetch(host + '/get-sem-groups')
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          arrParams.groups = json;
          fetch(host + '/get-sem-preps')
            .then((res) => res.json())
            .then((json) => {
              setTimeout(() => {
                arrParams.prepods = json;
                fetch(host + '/get-sem-info')
                  .then((res) => res.json())
                  .then((json) => {
                    setTimeout(() => {
                      arrParams.today = json;
                      arrParams.groups.unshift({ Name: 'нет', ItemId: -1 });
                      arrParams.prepods.unshift({ Name: 'нет', ItemId: -1 });
                      setItems({
                        groups: arrParams.groups,
                        prepods: arrParams.prepods,
                        today: Boolean(arrParams.today.CurrentWeek % 2),
                      });
                    });
                  });
              });
            });
        });
      });
  }, []);

  const [groupSt, setGroupSt] = useState<string>(
    window.localStorage.getItem('selectedGroup') || ''
  );
  const [prepodSt, setPrepodSt] = useState<string>(
    window.localStorage.getItem('selectedPrepod') || ''
  );

  const onClickEvent = () => {
    setPeriod(items.today);
    /* eslint-disable indent */
    const genereObject: ParamsFilterInput = {
      group: items.groups.filter((elem) => elem.Name.includes(groupSt))[0] || {
          ItemId: window.localStorage.getItem('selectedGroup')?.split('&')[1],
          Name: window.localStorage.getItem('selectedGroup')?.split('&')[0],
        } || {
          ItemId: -1,
          Name: 'нет',
        },
      prepod: items.prepods.filter((elem1) => elem1.Name.includes(prepodSt))[0] || {
          ItemId: window.localStorage.getItem('selectedPrepod')?.split('&')[1],
          Name: window.localStorage.getItem('selectedPrepod')?.split('&')[0],
        } || {
          ItemId: -1,
          Name: 'нет',
        },
    };
    setSidebarActive(false);
    setSearchValue({
      group: {
        ItemId: genereObject.group?.ItemId || -1,
        Name: genereObject.group?.Name || 'нет',
      },
      prepod: {
        ItemId: genereObject.prepod?.ItemId || -1,
        Name: genereObject.prepod?.Name || 'нет',
      },
      today: items.today,
    });

    window.localStorage.setItem(
      'selectedGroup',
      genereObject.group.Name + '&' + genereObject.group.ItemId
    );
    window.localStorage.setItem(
      'selectedPrepod',
      genereObject.prepod.Name + '&' + genereObject.prepod.ItemId
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
      <button key="btn" onClick={() => onClickEvent()} className={styles.button64}>
        <span className={styles.text}>Найти</span>
      </button>
    </div>
  );
};
