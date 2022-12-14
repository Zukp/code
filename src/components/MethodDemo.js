import React from "react";
import styled from "styled-components";

const MethodDemo = () => {
  return (
    <div>
      <DIVTEXT>
        <h1>Методика обучения</h1>
        <p>
          Летом 2020 года мы внедрили уникальную систему обучения, не имеющую
          аналогов на территории СНГ
        </p>
      </DIVTEXT>

      <div>
        <DIV>
          <div>
            <h1>1.Старт с самого нуля</h1>
            <p>
              Если ты до этого никогда не изучал программирование — тебе не
              будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
              программ и базового синтаксиса, до реальных проектов с нуля.
            </p>
          </div>

          <div>
            <h1>2.Командное обучение</h1>
            <p>
              Все студенты формируются в команды из 5 человек. Это помогает
              создавать более качественные проекты во время обучения и готовит к
              реалиям IT-компаний.
            </p>
          </div>
          <div>
            <h1>3.Упор на практику</h1>
            <p>
              Более 60% обучения - работа над проектами. Ты будешь кодить не
              только дома, но и прямо на уроках. К концу курса это позволит
              сформировать настоящее партфолио работ.
            </p>
          </div>
        </DIV>

        <DIV>
          <div>
            <h1>4.Внимание каждому студенту</h1>
            <p>
              Мы формируем небольшие группы - по 25 человек. Такую группу
              курирует 2 ментора и 1 глава направления. Это позволяет уделить
              персональное внимание каждому. Ответы на вопросы, поддержка в
              чате, персональные интервью и индивидуальная проверка домашних
              заданий и экзаменов - все включено.
            </p>
          </div>
          <div>
            <h1>5.Доступ 24/7</h1>
            <p>
              Записи всех уроков, по всем направлениям, доступны тебе
              круглосуточно. Учись в темпе, который подходит лично тебе
            </p>
          </div>
          <div>
            <h1>6.Все курсы по цене одного</h1>
            <p>
              Если у тебя достаточно времени и сил, чтобы освоить сразу
              несколько направлений - мы не против! Поступая в Академию ты
              получаешь доступ ко всем курсам своего потока. Опережаешь
              программу по Java - изучи Frontend!
            </p>
          </div>
        </DIV>
        <DIV>
          <div>
            <h1>7.Тренинги, тимбилдинги и хакатоны</h1>
            <p>
              Помимо уроков, тебя ждут ежемесячные тимбилдинги и тренинги от
              крутых разработчиков. Каждые три месяца, ты будешь прокачиваться
              на хакатонах и технических интервью.
            </p>
          </div>
          <div>
            <h1>8.Три ментора вместо одного</h1>
            <p>
              В каждом направлении ты имеешь доступ сразу к трем специалистам -
              автору курса, ментору и ревьюверу. Каждый из них отвечает за
              отдельную часть обучения. Такое разделение обязанностей помогает
              повысить качество процесса и дает тебе возможность пообщаться
              сразу с тремя разработчиками разного уровня.
            </p>
          </div>
          <div>
            <h1>9.Коворкинг</h1>
            <p>
              Пространство, где тебя ничего не будет отвлекать. Приходи в любое
              время и работай с командой или самостоятельно. Здесь тебя всегда
              ждут скоростной нтернет, удобное рабочее место, горячий чай и
              уютная команда нашей Академии
            </p>
          </div>
        </DIV>
      </div>
    </div>
  );
};
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
    margin-left: 400px;
    margin-bottom: 150px;
  }
`;
const DIV = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 1300px;
  margin-left: 16px;
  & h1 {
    font-size: 20px;
    line-height: 1.35;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 700;
    color: #000;
    width: 300px;
  }
  & p {
    font-size: 16px;
    line-height: 1.55;
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 300;
    color: #000;
    width: 300px;
  }
`;
export default MethodDemo;
