import { Items } from "../Items";
import "./style.css";
import { svgLevel_1, svgLevel_2, svgFile, svgCart } from "./svg";
export const Сollider = () => {
  const onMouseEdit = (
    <div className="level_edit">
      {svgFile}
      {svgCart}
    </div>
  );
  const APIarr = [{ children: [{}, {}] }, { children: [{}, {}] }];

  interface mapArrI {
    items: { children: {}[] }[] | {}[];
    num?: number;
  }
  const MapArr: React.FC<mapArrI> = (props) => {
    const { items, num } = props;
    console.log(num, "--->", items);

    return (
      <>
        {items?.map((e: any, i: number) =>
          e.children?.length !== undefined ? (
            MapArr({ items: e.children, num: i })
          ) : (
            <Items key={i} />
          )
        )}
      </>
    );
  };

  return (
    <div className="Сollider">
      <div className="topСollider">
        <div className="NameGroupsCollider">Строительно-монтажные работы</div>
      </div>
      <div className="titleСollider Box">
        <table className="table" cellSpacing="0">
          <tbody>
            <tr style={{ height: "42px" }}>
              <th style={{ width: "110px" }}>
                <div className="Level">Уровень</div>
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

            <MapArr items={APIarr} />
          </tbody>
        </table>
      </div>
      Сollider
    </div>
  );
};
