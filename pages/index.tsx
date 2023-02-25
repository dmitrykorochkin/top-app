import { Layout } from "@/layout/Layout";
import { useState } from "react";
import { Rating } from "../components";


export default function Home(): JSX.Element {

  const STAR_COUNT = 4; // 5 items, start from 0
  
  const [rating, setRating] = useState<number>(STAR_COUNT);

  return (
    <Layout>
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
    </Layout>
  );
}
