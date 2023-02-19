import { P } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>APP TOP</h1>
      <button className="primary">Button</button>
      <button className="ghost">Button</button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="m">Маленький</P>
    </div>
  );
}
