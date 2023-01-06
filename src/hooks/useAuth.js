import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export const useAuth = () => {
  const [todoList, saveTodos] = useLocalStorage("token", "");

  const createSession = (payload) => {
    const id = uuidv4();
  };

  return {
    createSession,
  };
};
