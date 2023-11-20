import "../CSS/styles.css";
import { Link } from "react-router-dom";
import { DarkModeButton } from "../components/DarkModeButton";
   export const Header = () => {  
    return (
      <header className="header">
        <nav className="nav-bar container">
          <Link to="/Rayah-Dw-React" className="title">Web Topics</Link>
          <div className="nav-buttons">
            <DarkModeButton/>
            <button className="icon-button">
              <ion-icon className="nav-icon" name="heart-outline"></ion-icon>
              <span className="nav-button-text">Favourites</span>
            </button>
          </div>
        </nav>
      </header>
    );
  };
  
  


















// const styledNavBtnContainer = styled.div`
// display:flex;
// gap:10px;

// `;
// const NavLink = styled(Link)`

// `;
// const StyledHeader = styled.header`
// background: var(--brand-primary);
// justify-content: space-betwwen;
// display: flex;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
// align-items: center;
// padding-block:;
// `;

// const StyledMainContainer = styled(MainContainer)`
// display:flex;
// justify-content:space-between;
// width:100%;
// `; 




    // <StyledHeader>
    //   <StyledMainContainer>
    //     <NavLink to='/home'> Web Topics</NavLink>
    //     <styledNavBtnContainer>
    //       <IconButton text="Dark Mode"
    //                   iconName="moon-outline"
    //                     />
    //       <IconButton text="Favorite"
    //                   iconName ="heart-outline"
    //                     />
          
    //     </styledNavBtnContainer>
    //   </StyledMainContainer>

    // </StyledHeader>
   



