import { Items } from "../Items";
import "./style.css";
export const Сollider = () => {
  const APIarr = [{ children: [{ children: [{}, {}] }, {}] }];

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
            <Items items={APIarr} />
          </tbody>
        </table>
      </div>
      Сollider
    </div>
  );
};
