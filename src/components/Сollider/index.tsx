import "./style.css";
import { svgLevel_1, svgLevel_2, svgFile, svgCart } from "./svg";
export const Сollider = () => {
  return (
    <div className="Сollider">
      <div className="topСollider">
        <div className="NameGroupsCollider">Строительно-монтажные работы</div>
      </div>
      <div className="titleСollider Box">
        <table className="table">
          <tbody>
            <tr style={{ height: "42px" }}>
              <th className="Level_1" style={{ width: "110px" }}>
                <div className="Level"> Уровень</div>
              </th>
              <th>
                <div className="tableText">Наименование работ</div>
              </th>
              <th>
                <div className="tableText">Основная з/п</div>
              </th>
              <th>
                <div className="tableText">Оборудование</div>
              </th>
              <th>
                <div className="tableText">Накладные расходы</div>
              </th>
              <th>
                <div className="tableText">Сметная прибыль</div>
              </th>
            </tr>
            <tr style={{ height: "60px" }}>
              <td className="Level_1 " scope="row">
                <div className="level_edit">
                  {" "}
                  {/*  this btn */}
                  {svgLevel_1}
                  {svgLevel_2}
                  {svgFile}
                  {svgCart}
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
            <tr style={{ height: "60px" }}>
              <td className="Level_1 " scope="row">
                {svgLevel_2}
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
          </tbody>
        </table>
      </div>
      Сollider
    </div>
  );
};
