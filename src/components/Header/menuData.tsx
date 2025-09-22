import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Início",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Sobre",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blogue",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Apoio",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Páginas",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Página Sobre",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Página de Contato",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Página de Blog em Grade",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Página de Blog com Barra Lateral",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Página de Detalhes do Blog",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Página de Login",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Página de Inscrição",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Página de Erro",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
