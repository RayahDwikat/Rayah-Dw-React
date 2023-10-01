import React from 'react';
import "../CSS/styles.css";

// const WelcomeSectionWrapper = styled.section`
//   width: 100%;
//   height: 114px;
//   background-color: var(--bg_default);
//   position: relative;
// `;

// const Triangles = styled.div`
//   height: 4.7vw;
//   position: relative;
//   overflow: hidden;
// `;

// const RightTriangle = styled.div`
//   height: 100%;
//   position: absolute;
//   top: 0;
//   width: 90%;
//   background-image: linear-gradient(to right, var(--brand-primary), var(--brand-secondary));
//   clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
//   left: 0;
// `;

// const LeftTriangle = styled.div`
//   height: 100%;
//   position: absolute;
//   top: 0;
//   width: 90%;
//   background-color: var(--brand-secondary);
//   clip-path: polygon(100% 0%, 0% 0%, 100% 100%);
//   right: 0;
// `;

// const WelcomeContent = styled.div`
//   margin-top: -20px;
//   display: flex;
//   justify-content: center;
//   font-weight: 700;
// `;

// const WelcomeHeader = styled.h1`
//   color: var(--brand-secondary);
//   font-size: 21px;
//   margin-bottom: -3px;
// `;

// const BriefDescription = styled.h2`
//   font-size: 15px;
//   color: var(--body-text);
// `;

export const WelcomeSection = () => {
  return (
    <section class="welcome-section">
    <div class="triangles">
      <div class="green-triangle"></div>
      <div class="blue-triangle"></div>
    </div>
    <div class="welcome">
      <div>
        <h1 class="welcome-header">Welcome to our website!</h1>
        <h2 class="brief-desc">We have a new design that's fresh, modern, and easy to use.</h2>
      </div>
    </div>
  </section>
    // <WelcomeSectionWrapper className="welcome-section">
    //   <Triangles className="triangles">
    //     <LeftTriangle className="left-triangle"></LeftTriangle>
    //     <RightTriangle className="right-triangle"></RightTriangle>
    //   </Triangles>
    //   <WelcomeContent className="welcome">
    //     <div>
    //       <WelcomeHeader className="welcome-header">Welcome to our website!</WelcomeHeader>
    //       <BriefDescription className="brief-desc">
    //         We have a new design that's fresh, modern, and easy to use.
    //       </BriefDescription>
    //     </div>
    //   </WelcomeContent>
    // </WelcomeSectionWrapper>
  );
};
