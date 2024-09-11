import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { timetableApi } from './api/timetable.api';

export const store = configureStore({
  reducer: {
    [timetableApi.reducerPath]: timetableApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(timetableApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
