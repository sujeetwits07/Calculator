import styled from "styled-components";

const Section = styled.div`
  /* color: white; */
  display: flex;
  background: #333;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  cursor: pointer;
  transition: filter 0.3s ease-in;

  .zero {
    width: 250px;
    border-radius: 57.5px;
    grid-column: 1 / span 2;
    position: relative;
    justify-content: flex-start;
    padding-left: 4px;
  }

  .function {
    color: black;
    display: flex;
    background: #a5a5a5;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
  }
  .active,
  .focus {
    filter: brightness(120%);
  }

  .operator {
    display: flex;
    background: #f1a33c;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
  }
`;

export { Section };
