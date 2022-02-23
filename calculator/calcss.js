import styled from "styled-components";

const Body = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  background-image: url(https://wallpaperaccess.com/download/4k-tech-211076);
`;
const Main = styled.div`
  color: white;
  width: 400px;
  height: 800px;
  background: black;
  border-radius: 50px;
  position: center;
  padding: 20px;
  .top {
    display: flex;
    height: 150px;
    padding: 0 20px;
    justify-content: space-between;
  }
  .display {
    font-size: 130px;
    margin-bottom: 20px;
    font-weight: 300;
    text-align: right;
  }
  .buttons {
    display: grid;
    grid-gap: 20px;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { Body, Main };
