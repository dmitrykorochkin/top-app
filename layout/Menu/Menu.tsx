import cn from "classnames";
import styles from "./Menu.module.css";
import { format } from "date-fns";
import { AppContext } from "@/context/app.context";
import { useContext, useEffect } from "react";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interfaces";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
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
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => {
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div
                className={cn(styles.firstLeve, {
                  [styles.firstLevelActive]: m.id == firstCategory
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>;
        })}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened
              })}
            >
              {buildThridLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
        ;
      </div>
    );
  };
  const buildThridLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <a
        href={`/${route}/${p.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: true
        })}
      >
        {p.category}
      </a>
    ));
  };

  useEffect(() => {
    setMenu && setMenu([]);
  });

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
