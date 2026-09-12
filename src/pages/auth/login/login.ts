import type { IUser } from "../../../types/IUser";
import { getUsers, saveUserSession } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;

  const usuarios = getUsers();
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === valueEmail && usuario.password === valuePassword
  );

  if (!usuarioEncontrado) {
    alert("Email o contraseña incorrectos.");
    return;
  }

  const usuarioLogueado: IUser = {
    ...usuarioEncontrado,
    loggedIn: true,
  };

  saveUserSession(usuarioLogueado);

  if (usuarioLogueado.role === "admin") {
    navigate("../../admin/home/home.html");
  } else {
    navigate("../../client/home/home.html");
  }
});