// import {lazy} from "react"
import HomeView from "./views/HomeView/HomeView";
import RegisterView from "./views/RegisterView/RegisterView";
import LoginView from "./views/LoginView/LoginView";
import ContactsView from "./views/ContactsView/ContactsView";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    // component: lazy(() => import("./views/HomeView/HomeView")),
    component: HomeView,
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    // component: lazy(() => import("./views/RegisterView/RegisterView")),
    component: RegisterView,
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    // component: lazy(() => import("./views/LoginView/LoginView")),
    component: LoginView,
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    // component: lazy(() => import("./views/ContactsView/ContactsView")),
    component: ContactsView,
    private: true,
    restricted: false,
  },
]