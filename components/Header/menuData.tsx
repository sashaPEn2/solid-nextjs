import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Главная",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "Возможности сайта",
    newTab: false,
    path: "/#features"
  },
  {
    id: 2.1,
    title: "Новости",
    newTab: false,
    path: "/blog"
  },
  {
    id: 2.3,
    title: "Документация",
    newTab: false,
    path: "/docs"
  },
  /* {
    id: 3,
    title: "Страницы",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "-",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  }, 
  */

  {
    id: 4,
    title: "Обратная связь",
    newTab: false,
    path: "/support"
  },
];

export default menuData;
