import { ReactNode } from "react";

interface ListProps<T> {
  // T mean items any thing
  items: T[]; // array of item
  render: (item: T) => ReactNode;
}

export const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </>
  );
};
