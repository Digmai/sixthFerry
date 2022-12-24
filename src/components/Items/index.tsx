import { Item } from "../Item";

interface mapArrI {
  items: { children: {}[] }[] | {}[];
  num?: number;
}
export const Items: React.FC<mapArrI> = (props) => {
  const { items, num } = props;
  console.log(num, "--->", items);

  return (
    <>
      {items?.map((e: any, i: number) =>
        e.children?.length !== undefined ? (
          Items({ items: e.children, num: i })
        ) : (
          <Item key={i} />
        )
      )}
    </>
  );
};
