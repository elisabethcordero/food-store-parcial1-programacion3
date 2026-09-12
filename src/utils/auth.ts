import type { Rol } from "../types/Rol";
import { getUserSession, removeUserSession } from "./localStorage";
import { navigate } from "./navigate";

export const checkAuthUser = (rolRequerido: Rol): void => {
  const usuario = getUserSession();

  if (!usuario || !usuario.loggedIn) {
    navigate("/src/pages/auth/login/login.html");
    return;
  }

  if (usuario.role !== rolRequerido) {
    if (usuario.role === "admin") {
      navigate("/src/pages/admin/home/home.html");
    } else {
      navigate("/src/pages/client/home/home.html");
    }
  }
};

export const logout = (): void => {
  removeUserSession();
  navigate("/src/pages/auth/login/login.html");
};