import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Routes from '../features/Routes';
import SearchFilter from '../features/SearchFilter';
import JWT from '../features/JWT';

export const store = configureStore({
  reducer: {
    routes: Routes,
    searchFilter: SearchFilter,
    jwt:JWT,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
