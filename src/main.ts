import { checkAuthUser } from "./utils/auth";

const path = window.location.pathname;

if (path.includes("/pages/admin/")) {
  checkAuthUser("admin");
} else if (path.includes("/pages/client/")) {
  checkAuthUser("client");
}
