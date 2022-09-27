import React from "react";
import styled from "styled-components";

const Study = () => {
  return (
    <div>
      <H1>Учебное расписание</H1>
      <TABLE>
        <tr>
          <th>Событие</th>
          <th>Периодичность</th>
          <th>День</th>
          <th>Время</th>
          <th>Проводит</th>
        </tr>
        <tr>
          <td>Урок</td>
          <td>3 раза в неделю</td>
          <td>Пн., Ср., Пт.</td>
          <td>19:00 - 20:30</td>
          <td>Ментор</td>
        </tr>
        <tr>
          <td> Консультация</td>
          <td> 2 раза в неделю</td>
          <td> Вт., Чт. </td>
          <td> 19:00-20:00</td>
          <td> Ревьювер</td>
        </tr>
        <tr>
          <td>Экзамен</td>
          <td>ежемесячно</td>
          <td>определяется за неделю</td>
          <td> 19:00-20:30</td>
          <td> Автор курса, Ментор, Ревьювер</td>
        </tr>
        <tr>
          <td>Техническое интервью</td>
          <td> раз в триместр</td>
          <td>определяется за неделю</td>
          <td>19:00-20:30 </td>
          <td> Внешний эксперт</td>
        </tr>
        <tr>
          <td>Хакатон</td>
          <td> раз в три месяца</td>
          <td>определяется за неделю</td>
          <td> весь день</td>
          <td> Ментор</td>
        </tr>
        <tr>
          <td>Тренинг </td>
          <td> ежемесячно</td>
          <td> определяется спикером</td>
          <td>19:00-20:00</td>
          <td> Приглашенный специалист</td>
        </tr>
        <tr>
          <td> Тимбилдинг </td>
          <td> ежемесячно</td>
          <td> любое</td>
          <td> любое</td>
          <td> Твоя команда</td>
        </tr>
      </TABLE>
    </div>
  );
};
const H1 = styled("h1")`
  margin-top: 100px;
  font-size: 42px;
  line-height: 1.23;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 50px;
`;
const TABLE = styled("table")`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 1000px;
  height: 440px;
  border-right: none;
  margin-left: 150px;
  margin-bottom: 100px;
  & th {
    border-width: 0px 0px 1px 0px;
    background: #ffd600;
    border-color: #000000;
    color: #000000;
    border-collapse: collapse;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  tr:hover {
    background-color: #dddddd;
  }
`;
export default Study;
