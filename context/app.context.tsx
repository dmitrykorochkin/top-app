import { MenuItem } from "@/interfaces/menu.interfaces";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { createContext } from "react";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;


}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses});

export 
