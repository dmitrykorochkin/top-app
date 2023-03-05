import cn from "classnames";
import styles from "./Menu.module.css";
import { format } from "date-fns";
import { AppContext } from "@/context/app.context";
import { useContext, useEffect } from "react";
import { FirstLevelMenuItem } from "@/interfaces/menu.interfaces";
import CoursesIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import ProductsIcon from "./icons/products.svg"
import { TopLevelCategory } from "@/interfaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses
  },
  {
    route: "courses",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services
  },
  {
    route: "courses",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books
  },
  {
    route: "courses",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products
  }
];

export const Menu = (): JSX.Element => {

  const {menu, setMenu, firstCategory} = useContext(AppContext);

  useEffect(() => {
    setMenu && setMenu([]);
  })

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
