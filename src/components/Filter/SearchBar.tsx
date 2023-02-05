import React from 'react';
import Select from 'react-select';

import styles from './Filter.module.scss';

interface SearchBarProps {
  setParametr: React.Dispatch<React.SetStateAction<string>>;
  data: Array<{ Name: string; ItemId: number }>;
  placeholder: string;
  selected: string;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const changeValue = (event: { Name: string; ItemId: number } | null) => {
    props.setParametr(event?.Name || '');
  };

  return (
    <Select
      defaultInputValue={
        window.localStorage
          .getItem('selected' + props.selected)
          ?.split('&')[0]
          .replace('нет', '') || undefined
      }
      className={styles.input}
      placeholder={props.placeholder}
      onChange={(event) => changeValue(event)}
      getOptionLabel={(option) => option?.Name}
      getOptionValue={(option) => option?.Name}
      options={props.data}
    />
  );
};
