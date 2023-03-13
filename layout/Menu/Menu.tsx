import cn from "classnames";
import styles from "./Menu.module.css";
import { AppContext } from "@/context/app.context";
import { useContext, useEffect } from "react";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interfaces";


import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/herpers";



export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if(m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened;
      } 
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => {
          return (
            <>
              <div key={m.route}>
                <Link href={`/${m.route}`}>
                  <div
                    className={cn(styles.firstLevel, {
                      [styles.firstLevelActive]: m.id == firstCategory
                    })}
                  >
                    {m.icon}
                    <span>{m.name}</span>
                  </div>
                </Link>

                {m.id == firstCategory && buildSecondLevel(m)}
              </div>
            </>
          );
        })}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened
                })}
              >
                {buildThridLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
        
      </div>
    );
  };
  const buildThridLevel = (pages: PageItem[], route: string) => {
    return pages.map((p, index) => (
      <Link
        href={`/${route}/${p.alias}`}
        key={index}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
        })}
      >
        {p.category}
      </Link>
    ));
  };

  useEffect(() => {
    setMenu && [];
  });

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
