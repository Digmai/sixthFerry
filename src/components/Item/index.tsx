import { useRef } from "react";
import { svgLevel_1, svgLevel_2, svgFile, svgCart } from "./svg";
const onMouseEdit = (
  <div className="level_edit">
    {svgFile}
    {svgCart}
  </div>
);

export const Item = (props: any) => {
  const Svg__level__pg = () => {
    return (
      <>
        <div
          style={{
            marginLeft: `${props.marginLeft + 8}px`,
            paddingTop: `${
              props.children.length > 1 ? props.children.length * 50 + 8 : 50
            }px`,
          }}
          className="svg__level__pg"
        ></div>
      </>
    );
  };
  console.log("===>", props);

  return (
    <>
      <td className="Level_1 " scope="row">
        {Boolean(props.children) && <Svg__level__pg />}

        <div>
          <div className="TopSvg"></div>
          <div style={{ marginLeft: `${props.marginLeft}px` }}> {svgFile}</div>
          <div className="svg_level__pg"></div>
        </div>
      </td>
      <td>
        <div className="tableText">Наименование работ</div>
      </td>
      <td>
        <div className="tableText">3400</div>
      </td>
      <td>
        <div className="tableText">322300</div>
      </td>

      <td>
        <div className="tableText">422300</div>
      </td>

      <td>
        <div className="tableText">3322300</div>
      </td>
    </>
  );
};
