import { GetTimetableLesson } from '@/types/models/GetTimetableLesson.model';
import { QueryGetTimeteblePeram } from '@/types/QueryGetTimetebleParam.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE } from '@/redux/constants';

export const timetableApi = createApi({
  reducerPath: 'timetableApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE,
  }),
  endpoints: (builder) => ({
    getTimetable: builder.query<GetTimetableLesson[], QueryGetTimeteblePeram>({
      query: (params) => {
        const { group, prep } = params;
        let queryString = '';
        if (group || prep) {
          queryString += group ? `group${group}` : '';
          queryString += prep ? `prep${prep}` : '';
        }
        return {
          url: `get-sem-rasp/${queryString}`,
          method: 'get',
        };
      },
    }),
  }),
});

export const { useGetTimetableQuery } = timetableApi;

export type SetupApi = typeof timetableApi;
export type UseGetVehiclesQueryHook = ReturnType<
  SetupApi['endpoints']['getTimetable']['useQuery']
>;
