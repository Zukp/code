import React from "react";
import styled from "styled-components";

const Method = () => {
  return (
    <DIV>
      <DIVTEXT>
        <h1>Методика обучения</h1>
        <p>
          Лучшие практики частных школ, адаптированные под нашу ментальность
        </p>
      </DIVTEXT>

      <DIVPARAGRAF>
        <div>
          <h1>100+ проектов</h1>
          <p>
            70% курса - это практика. Ты будешь закреплять каждую тему на
            практике. А значит в твоем портфолио будет ооочень много работ
          </p>
        </div>
        <div>
          <h1>14 крутых спецов</h1>
          <p>
            Три ментора и еще 11 специалистов, которые будут проводить тренинги
            и технические интервью. Столько людей ты встретишь за курс
          </p>
        </div>
        <div>
          <h1>5 занятий в неделю</h1>
          <p>
            На трех из них ты будешь проходить новые темы, а еще два нужны для
            отработки проектов и разборов вопросов
          </p>
        </div>
        <div>
          <h1>3 ментора на группу</h1>
          <p>
            Тебя будут прокачивать целых 3 ментора на разных уровнях. Глава
            департамента, преподаватель и ревьюер
          </p>
        </div>
      </DIVPARAGRAF>
    </DIV>
  );
};
const DIV = styled("div")`
  width: 1250px;
  margin-top: 50px;
  margin-left: 8px;
  margin-bottom: 100px;
  background-color: #ffd600;
  padding: 30px;
`;
const DIVPARAGRAF = styled("div")`
  display: flex;
  justify-content: space-around;
  & h1 {
    font-size: 32px;
    line-height: 1.2;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 700;
    color: #000;
    width: 200px;
    border-bottom: 4px solid #000;
  }
  & p {
    font-size: 18px;
    line-height: 1.55;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 300;
    color: #000;
    width: 200px;
  }
`;
const DIVTEXT = styled("div")`
  text-align: center;
  & h1 {
    font-size: 42px;
    line-height: 1.23;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 700;
    color: #000;
  }
  & p {
    font-size: 24px;
    line-height: 1.5;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 300;
    color: #000;
    max-width: 560px;
    margin-left: 350px;
    margin-bottom: 150px;
  }
`;
export default Method;
