import { Person } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
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