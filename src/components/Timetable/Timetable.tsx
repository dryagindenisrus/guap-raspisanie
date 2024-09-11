import { useGetTimetableQuery } from '@/redux/api/timetable.api';
import { QueryGetTimeteblePeram } from '@/types/QueryGetTimetebleParam.interface';

export const Timetable = () => {
  const params: QueryGetTimeteblePeram = {
    group: 225,
  };

  // eslint-disable-next-line no-empty-pattern
  const {} = useGetTimetableQuery(params);

  return <div></div>;
};
