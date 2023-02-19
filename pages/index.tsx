import { Tag } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>APP TOP</h1>
      <button className="primary">Button</button>
      <button className="ghost">Button</button>
      <p className="fz-l">Большой</p>
      <p className="fz-m">Средний</p>
      <p className="fz-s">Маленький</p>

      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag size="m" color="primary">Primary</Tag>
    </div>
  );
}
