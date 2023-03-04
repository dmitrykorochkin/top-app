import { withLayout } from "@/layout/Layout";
import { useState } from "react";
import { Rating } from "../components";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "@/interfaces/menu.interfaces";

function Home({ menu }: HomeProps): JSX.Element {
  const STAR_COUNT = 4; // 5 items, start from 0

  const [rating, setRating] = useState<number>(STAR_COUNT);

  return (
    <>
      <h1>APP TOP</h1>
      <button className="primary">Button</button>
      <button className="ghost">Button</button>
      <p className="fz-l">Большой</p>
      <p className="fz-m">Средний</p>
      <p className="fz-s">Маленький</p>

      <div className="tag tag--m tag--red">Тег1</div>
      <div className="tag tag--m tag--green">Тег2</div>
      <div className="tag tag--s tag--primary">Тег3</div>
      <div className="tag tag--m tag--ghost">Тег4</div>

      <Rating rating={rating} isEditable setRating={setRating}></Rating>
     
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory
    }
  };
};
interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
