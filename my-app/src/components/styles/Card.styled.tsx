import styled from "styled-components";
import { MyTheme } from "./Theme.styled";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${MyTheme.colors.secondary};
  border-radius: 15px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 300px;

  img {
    border-radius: 10px;
    max-width: 100%;
    margin: 10px 10px 0 10px;
  }
`;
