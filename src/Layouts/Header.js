import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconButton } from "../components/IconButton";
import { MainContainer } from "./MainContainer";
import '../CSS/styles.css'; 
// const StyledHeader = styled.header`
// background: var(--brand-primary);

// `;
// const StyledMainContainer =styled(MainContainer)`
// display:flex;
// justify-content:space-between;
// width:100%;
// `;
export const Header = () => {
   // return <>
        {/* <StyledHeader>
            <MainContainer>
                <div>
                    <a href="Home.js">Web Topics</a>
                </div>
                <div>
                    <Button>Dark mode</Button>
                    <Button>Favourites</Button>
                </div>
            </MainContainer>

        </StyledHeader> */}
       
  return (
    <header className="header">
      <nav className="nav-bar container">
        <a href="index.html" className="title">
          Web Topics
        </a>
        <div className="nav-buttons">
          <IconButton id="dark-mode" className="icon-button" text="dark mode" iconName="moon-outline">
            <ion-icon id="moon" className="nav-icon" text="Dark mode" iconName="moon-outline"></ion-icon>
            <span className="nav-button-text">Dark Mode</span>
          </IconButton>
          <IconButton className="icon-button" text="Favorite" iconName="heart-outline">
            <ion-icon className="nav-icon" name="heart-outline"></ion-icon>
            <span className="nav-button-text">Favourites</span>
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

