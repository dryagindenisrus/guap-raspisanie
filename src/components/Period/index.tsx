import React from 'react';

import low from '../../img/low.svg';
import up from '../../img/up.svg';

interface PeriodProps {
  period: number;
}

export const Period: React.FC<PeriodProps> = (props) => {
  if (props.period === 1) {
    return <img src={low} alt="low" />;
  } else if (props.period === 2) {
    return <img src={up} alt="up" />;
  } else {
    return <></>;
  }
};
