import type { IUser } from "../types/IUser";

// Maneja el array de usuarios registrados (clave "users")
export const getUsers = (): IUser[] => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

export const saveUsers = (users: IUser[]): void => {
  localStorage.setItem("users", JSON.stringify(users));
};

// Maneja la sesión activa (clave "userData")
export const saveUserSession = (user: IUser): void => {
  localStorage.setItem("userData", JSON.stringify(user));
};

export const getUserSession = (): IUser | null => {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : null;
};

export const removeUserSession = (): void => {
  localStorage.removeItem("userData");
};