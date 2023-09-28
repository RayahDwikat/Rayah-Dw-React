
   import React from 'react';

 export  const RatingStars = ({ rating }) => {
     const stars = [];
   
     for (let i = 0; i < 5; i++) {
       if (i < rating) {
         stars.push(<ion-icon key={i} className="rate-star" name="star"></ion-icon>);
       } else {
         stars.push(<ion-icon key={i} className="rate-star" name="star-outline"></ion-icon>);
       }
     }
   
     return <div className="stars">{stars}</div>;
   };
   
 
   