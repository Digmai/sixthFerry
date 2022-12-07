import "./style.css";

const nameProject = [
  "По проекту",
  "Объекты",
  "РД",
  "MTO",
  "CMP",
  "График",
  "МиМ",
  "Рабочие",
  "Капвложения",
  "Бюджет",
  "Финансирование",
  "Панорамы",
  "Камеры",
  "Поручения",
  "Контрагенты",
];

const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
      fill="white"
    />
  </svg>
);

export const LeftBar = () => {
  const MupItemsForBar = () => {
    return (
      <>
        {nameProject.map((item: string, index) => (
          <div className={index == 4 ? "ItemsForBar active" : "ItemsForBar"}>
            <div className="MupItemsForBarSVG">{svg}</div>
            <div className="ItemsForBarText">{item}</div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="LeftBar">
      <div className="topLeftBar">
        <div className="topLeftBarTitle">
          <div className="nameProject">Название проекта</div>
          <div className="topLeftBarCild">Аббревиатура</div>
        </div>
        <svg
          className="iconLeftBar"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
        >
          <path
            d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
            fill="white"
          />
        </svg>
      </div>
      <div>
        <MupItemsForBar />
      </div>
    </div>
  );
};
