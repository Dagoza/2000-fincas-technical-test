import { useState } from "react";

export const useLocalStorage = (name, initValue) => {
  const localStorageToken = localStorage.getItem(name);
  !localStorageToken && localStorage.setItem(name, JSON.stringify(initValue));
  const parsedToken = localStorageToken ? JSON.parse(localStorageToken) : [];
  const [item, setItem] = useState(parsedToken);

  const saveItem = (newItem) => {
    localStorage.setItem(name, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};
