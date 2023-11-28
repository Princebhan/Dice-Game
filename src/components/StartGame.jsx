import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    img {
      margin-bottom: 20px;
    }
  }

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;

      @media (max-width: 768px) {
        font-size: 48px;
      }
    }
  }
`;
