import {lazy} from "react";

const AsyncHomePage = lazy(() => import("./views/HomeView/HomeView" /* webpackChunkName: "home-page" */));
const AsyncRegisterView = lazy(() => import("./views/RegisterView/RegisterView" /* webpackChunkName: "register-page" */));
const AsyncLoginView = lazy(() => import("./views/LoginView/LoginView" /* webpackChunkName: "login-page" */));
const AsyncContactsView = lazy(() => import("./views/ContactsView/ContactsView" /* webpackChunkName: "contacts-page" */));

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: AsyncHomePage,
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: AsyncRegisterView,
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: AsyncLoginView,
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: AsyncContactsView,
    private: true,
    restricted: false,
  },
]