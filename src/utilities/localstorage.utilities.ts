import { Person } from '@/models';

// Defnir un metodo para enviar los datos al localstorage
export const setLocalStorage = (key:string, value:Person) => {
  localStorage.setItem(key, JSON.stringify(value));
}

// Definir un metodo para obtener los datos del localstorage
export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
}
