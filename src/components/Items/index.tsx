import { svgFile } from "../Сollider/svg";

export const Items = (props: any) => {
  return (
    <tr style={{ height: "60px" }}>
      <td className="Level_1 " scope="row">
        <div className="svg_level_1">
          <div className="TopSvg"></div>
          <div> {svgFile}</div>
          <div className="BeamBottom"></div>
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
