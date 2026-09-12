import type { IUser } from "../../../types/IUser";
import { getUsers, saveUsers } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;

  const usuarios = getUsers();

  const emailYaExiste = usuarios.some((usuario) => usuario.email === valueEmail);

  if (emailYaExiste) {
    alert("Ese email ya está registrado. Probá con otro o iniciá sesión.");
    return;
  }

  const nuevoUsuario: IUser = {
    email: valueEmail,
    password: valuePassword,
    role: "client",
    loggedIn: false,
  };

  usuarios.push(nuevoUsuario);
  saveUsers(usuarios);

  alert("¡Registro exitoso! Ahora podés iniciar sesión.");
  navigate("../login/login.html");
});