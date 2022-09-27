import React from "react";
import styled from "styled-components";

const cost = [
  {
    title: "БРОНЬ МЕСТА",
    description:
      'Закрепляет за тобой место еще до начала курса. Открывает доступ к учебной платформе и курсу "Компьютерная грамотность"',
    price: 2500,
  },
  {
    title: "МЕСЯЦ ОБУЧЕНИЯ",
    description:
      "Дает полный доступ на 1 месяц. Ты можешь разделить полную сумму обучения на ежемесячные взносы и оплачивать в удобные тебе даты",
    price: 2500,
  },
  {
    title: "ВЕСЬ КУРС",
    description:
      "При разовой оплате за весь курс, мы даем скидку в 5% на полную сумму. Данная стоимость указана с учетом скидки.",
    price: 90000,
  },
];
const Cost = () => {
  return (
    <div>
      <H1>Стоимость обучения</H1>

      {cost.map((item) => (
        <DIV>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <h4>{item.price} сомов</h4>
        </DIV>
      ))}
    </div>
  );
};
const H1 = styled("h1")`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 42px;
  line-height: 1.23;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 700;
  color: #000;
`;
const DIV = styled("div")`
  display: flex;
  justify-content: space-around;
  & h1 {
    font-size: 28px;
    line-height: 1.17;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 700;
    color: #000;
    width: 150px;
  }
  & h4 {
    color: #ffd600;
    font-size: 28px;
    line-height: 1.17;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 700;
  }
  & p {
    font-size: 18px;
    line-height: 1.55;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 300;
    color: #000;
    width: 500px;
  }
`;
export default Cost;
