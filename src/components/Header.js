import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <DIV>
      <header>
        <PARAGRAF>
          Получи профессию <span>Frontend-разработчика</span> за 9 месяцев. С
          нуля.
        </PARAGRAF>
      </header>
    </DIV>
  );
};
const DIV = styled("div")`
  margin-top: -73px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WPbhWGhJ11OLZo7aJY9AshsqbHrE5OTVYg&usqp=CAU");
  width: 1400px;
  height: 632px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: -10px;
`;

const PARAGRAF = styled("p")`
  font-size: 72px;
  text-align: left;
  color: #fff;
  height: 152px;
  letter-spacing: 0.3px;
  padding: 240px;
  & span {
    color: rgb(255, 214, 0);
  }

  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.7)
  );
`;
export default Header;
