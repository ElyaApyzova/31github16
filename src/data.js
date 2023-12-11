import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contacts } from "./components/Contacts";

export const data = [
  {
    route: "/",
    exact: true,
    name: "Home",
    element: () => <Home />,
  },
  {
    route: "/about",
    exact: true,
    name: "About",
    element: () => <About />,
  },

  {
    route: "/contacts",
    exact: true,
    name: "Contact",
    element: () => <Contacts />,
  },
];
