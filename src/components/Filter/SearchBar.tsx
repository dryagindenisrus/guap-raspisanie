import React from "react";
import Select from "react-select";

import styles from "./Filter.module.scss";

interface SearchBarProps {
  setParametr: React.Dispatch<React.SetStateAction<string>>;
  data: Array<{ name: string; value: number }>;
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  // const [options, setOptions] = React.useState([]);

  const changeValue = (event: { name: string; value: number } | null) => {
    props.setParametr(event?.name || "");
  };

  return (
    <Select
      key={props.placeholder}
      className={styles.input}
      placeholder={props.placeholder}
      onChange={(event) => changeValue(event)}
      getOptionLabel={(option) => {
        return option.name;
      }}
      getOptionValue={(option) => {
        return option.value.toString();
      }}
      options={props.data}
    />
  );
};
