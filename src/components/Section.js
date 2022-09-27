import React from "react";
import styled from "styled-components";
const Section = () => {
  return (
    <SECTION>
      <DIVTEXT>
        <div>
          <h1>Что такое Frontend</h1>
          <div>
            <p>
              Это всё, что ты видишь и кликаешь на сайте или в приложении -
              картинки, кнопочки, анимации и даже бесячая реклама.
            </p>
            <p>
              Самые главные инструменты frontend разработки сайтов это
              JavaScript, HTML и CSS.
            </p>
            <p>
              В Кыргызстане фронтенд-разработчики востребованы практически в
              каждой IT-компании. Это также одно из самых популярных направлений
              для фриланса и удаленной работы. Все потому, что в современном
              мире сайт нужен каждому
            </p>
          </div>
        </div>
      </DIVTEXT>

      <DIVIMG>
        <IMG
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
          alt=""
        />
        <IMG2
          src="https://xakep.ru/wp-content/uploads/2018/08/180618/js-h.jpg"
          alt=""
        />
      </DIVIMG>
    </SECTION>
  );
};
const SECTION = styled("section")`
  display: flex;
  justify-content: space-around;
  width: 1300px;
  margin-top: 100px;
  position: relative;
  margin-bottom: 100px;
`;
const DIVTEXT = styled("div")`
  width: 400px;
  margin-left: -80px;
  & h1 {
    font-size: 42px;
    line-height: 1.23;
    color: #ffd600;
  }
  & h2 {
    font-size: 42px;
    line-height: 1.23;
    color: #ffd600;
  }
  & p {
    font-family: "Montserrat", Arial, sans-serif;
    font-weight: 300;
    color: #000;
    font-size: 20px;
    line-height: 1.55;
  }
`;
const DIVIMG = styled("div")`
  margin-top: 130px;
  margin-left: -90px;
`;
const IMG = styled("img")`
  width: 350px;
  height: 350px;
`;
const IMG2 = styled("img")`
  width: 250px;
  height: 250px;
  position: absolute;
  top: 380px;
  right: 80px;
`;

export default Section;
