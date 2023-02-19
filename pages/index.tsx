

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>APP TOP</h1>
      <button className="primary">Button</button>
      <button className="ghost">Button</button>
      <p className="fz-l">Большой</p>
      <p className="fz-m">Средний</p>
      <p className="fz-s">Маленький</p>

      <div className="tag tag--m teg--red">Тег1</div>
      <div className="tag tag--m teg--green">Тег2</div>
      <div className="tag tag--s teg--primary">Тег3</div>
      <div className="tag tag--m teg--ghost">Тег4</div>
    </div>
  );
}
