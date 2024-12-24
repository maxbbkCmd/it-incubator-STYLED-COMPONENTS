import "./App.css";
import { ThemeProvider } from "styled-components";
import { Card } from "./components/styles/Card.styled";
import { ButtonBox, TextBox } from "./components/styles/Box.styled";
import { MyTheme } from "./components/styles/Theme.styled";
import { StyledBtn, SuperBtn } from "./components/styles/Btn.styled";

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={MyTheme}>
        <Card>
          <img src='/Rectangle_1.jpg' alt='asd' />
          
          <TextBox>
            <h3>Headline</h3>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <ButtonBox>
              <StyledBtn>See more</StyledBtn>
              <SuperBtn>Save</SuperBtn>
            </ButtonBox>
          </TextBox>

        </Card>
      </ThemeProvider>
    </div>
  );
}

export default App;

