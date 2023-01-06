
import { useState } from "react";

export const useLocalStorage = (name, initValue) => {
  const localStorageTodo = localStorage.getItem(name);
  !localStorageTodo && localStorage.setItem(name, JSON.stringify(initValue));
  const parsedTodo = localStorageTodo ? JSON.parse(localStorageTodo) : [];
  const [item, setItem] = useState(parsedTodo);

  const saveItem = (newItem) => {
    localStorage.setItem(name, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [
    item,
    saveItem
  ]
}