import { useRef } from "react";
import { svgLevel_1, svgLevel_2, svgFile, svgCart } from "./svg";
const onMouseEdit = (
  <div className="level_edit">
    {svgFile}
    {svgCart}
  </div>
);

export const Item = (props: any) => {
  const CRef = useRef();
  const Svg__level__pg = () => {
    console.log(CRef.current);

    return (
      <>
        <div className="svg__level__pg"></div>
      </>
    );
  };

  return (
    <tr style={{ height: "60px" }}>
      <td className="Level_1 " scope="row">
        <div style={{ marginLeft: `${props.marginLeft}px` }}>
          <div className="TopSvg"></div>
          <div ref={CRef.current}> {svgFile}</div>
          <div className="svg_level__pg"></div>
          <Svg__level__pg />
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
