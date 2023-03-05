import cn from "classnames";
import styles from "./Menu.module.css";
import { format } from "date-fns";
import { AppContext } from "@/context/app.context";
import { useContext, useEffect } from "react";
import { FirstLevelMenuItem } from "@/interfaces/menu.interfaces";
import CoursesIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import GoodsIcon from "./icons/goods.svg"

const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses'; name: 'Курсы'; }
]

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
