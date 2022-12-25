import { Item } from "../Item";

interface mapArrI {
  items: { children?: { children?: {}[] }[] }[] | {}[] | { children?: {}[] }[];
  marginLeft?: number;
}
export const Items: React.FC<mapArrI> = (props) => {
  const { items, marginLeft = 16 } = props;
  console.log(marginLeft, "--->", items);

  return (
    <>
      {items?.map((e: any, i) =>
        e.children?.length !== undefined  ? (
          Items({ items: e.children, marginLeft: marginLeft + 20 })
        ) : (
          <Item key={i} marginLeft={marginLeft} />
        )
      )}
    </>
  );
};
