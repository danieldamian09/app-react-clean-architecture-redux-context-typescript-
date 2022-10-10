import { Person } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { peopleSlice } from './states';
import { favoritesSlice } from './states/favorites';

export interface AppStore{
  people: Person[],
  favorites: Person[]
}

export const store = configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer
  }
})

// Para nuestro hook personalizado de useSelector
export type RootState = ReturnType<typeof store.getState>

// Para nuetro hook personalizado Dispatch
export type AppDispatch = typeof store.dispatch