import { createRef, LegacyRef, useEffect, useRef, useState } from "react";
import { Item } from "../Item";

interface itemsI {
  items: { children?: { children?: {}[] }[] }[] | {}[] | { children?: {}[] }[];
  marginLeft?: number;
  dadRef?: any;
  i?: any;
}
export const Items: React.FC<itemsI> = (props) => {
  const { items, marginLeft = 16, dadRef, i } = props;
  const [refs, uRefs] = useState<HTMLTableRowElement>();

  let ref = useRef<HTMLTableRowElement>(null);
  //ref={ref.current}
  useEffect(() => {
    if (ref.current !== null && ref.current !== undefined) {
      uRefs(ref.current);
      // console.log(props);
    }
  }, [ref.current]);

  return (
    <>
      {items?.map((e: any, index) =>
        e.children?.length !== undefined ? (
          <>
            <tr ref={ref} style={{ height: "60px" }}>
              <Item
                key={i}
                parent={dadRef}
                index={index}
                marginLeft={marginLeft}
                children={e.children}
              />
            </tr>

            <Items
              {...{
                items: e.children,
                marginLeft: marginLeft + 20,
                dadRef: refs,
              }}
            />
          </>
        ) : (
          <tr style={{ height: "60px" }}>
            <Item
              key={i}
              marginLeft={marginLeft}
              parent={dadRef}
              index={index}
              children={e.children}
            />
          </tr>
        )
      )}
    </>
  );
};
