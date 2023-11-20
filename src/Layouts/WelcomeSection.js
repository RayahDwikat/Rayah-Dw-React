import React from 'react';
import "../CSS/styles.css";
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
   
  );
};
