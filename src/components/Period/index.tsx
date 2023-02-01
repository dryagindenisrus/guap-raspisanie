import React from 'react';

import low from '../../img/low.svg';
import up from '../../img/up.svg';

interface PeriodProps {
  period: string;
}

export const Period: React.FC<PeriodProps> = (props) => {
  if (props.period === 'low') {
    return <img src={low} alt="low" />;
  } else if (props.period === 'up') {
    return <img src={up} alt="up" />;
  } else {
    return <></>;
  }
};
