import React from 'react';
import Select from 'react-select';

import styles from './Filter.module.scss';

interface SearchBarProps {
  setParametr: React.Dispatch<React.SetStateAction<string>>;
  data: Array<{ name: string; value: number }>;
  placeholder: string;
  selected: string;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const changeValue = (event: { name: string; value: number } | null) => {
    props.setParametr(event?.name || '');
  };

  // window.localStorage.setItem("selectedGroup", genereObject.group.name);
  //   window.localStorage.setItem("selectedPrepod", genereObject.prepod.name);
  //   window.localStorage.setItem("selectedCorpus", genereObject.corpus.name);
  //   window.localStorage.setItem("selectedAudit", genereObject.audit.name);

  return (
    <Select
      defaultInputValue={
        window.localStorage
          .getItem('selected' + props.selected)
          ?.split('&')[0]
          .replace('- нет -', '') || undefined
      }
      className={styles.input}
      placeholder={props.placeholder}
      onChange={(event) => changeValue(event)}
      getOptionLabel={(option) => {
        return option.name;
      }}
      getOptionValue={(option) => {
        return option.name;
      }}
      options={props.data}
    />
  );
};
