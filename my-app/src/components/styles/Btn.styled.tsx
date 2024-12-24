import { styled } from "styled-components";
import { MyTheme } from "./Theme.styled";

export const StyledBtn = styled.button`
  height: 30px;
  width: 86px;
  background-color: ${MyTheme.colors.primory};
  color: ${MyTheme.colors.secondary};
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 5px;
  border: none;
`;

export const SuperBtn = styled(StyledBtn)`
  background-color: transparent;
  border: 2px solid ${MyTheme.colors.primory};
  color: ${MyTheme.colors.primory};
  margin-left: 12px;
  margin-bottom: 22px;
`;
