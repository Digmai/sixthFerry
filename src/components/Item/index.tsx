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
        <div className="svg__level__pg"></div>
      </>
    );
  };
  console.log(props.Ref);
  let ref = useRef(null);
  //ref={ref.current}
  return (
    <tr style={{ height: "60px" }}>
      <td className="Level_1 " scope="row">
        {props.marginLeft > 16 && <Svg__level__pg />}

        <div>
          <div className="TopSvg"></div>
          <div style={{ marginLeft: `${props.marginLeft}px` }}> {svgFile}</div>
          <div className="svg_level__pg"></div>
        </div>
      </td>
      <td>
        <div className="tableText">level_edit</div>
      </td>
      <td>
        <div className="tableText">level_edit</div>
      </td>
      <td>
        <div className="tableText">level_edit</div>
      </td>
    </tr>
  );
};
