import React from 'react';
import "../CSS/styles.css";



export const InputWithIcon = ({ icon, placeholder, onChange, value }) => {
  return (
     <div class="search">
       <ion-icon class="search-icon" name="search"></ion-icon>
    <input type="text" value={value} onChange={onChange} placeholder="Search the website..."/>
    </div>
    
//  {/* <div class="search-bar container">
//     <div class="search">
//       <ion-icon class="search-icon" name="search"></ion-icon>
//       <input type="search" name="search" id="search" placeholder="Search the website..."/>
//     </div>
//     <div class="type-selector">
//       <div class="options">
//         <label for="sortOptions"> Sort by: </label>
//         <select name="courses" id="sort-options"> 
//           <option>Author Name </option>
//           <option>Topic Title</option>

//         </select>
//       </div>
//       <div class="options">
//         <label for="filterOptions"> Filter by: </label> 
//        <select name="filter" id="filter">
//                     <option value="">Default</option>
//                     <option value="Web Development Languages">Web Development Languages</option>
//                     <option value="Frontend Frameworks and Libraries">Frontend Frameworks and Libraries</option>
//                     <option value="Backend Frameworks and Libraries">Backend Frameworks and Libraries</option>
//                     <option value="Databases and APIs">Databases and APIs</option>
//                     <option value="Web Development Concepts and Technologies">Web Development Concepts and Technologies</option>
//                 </select>
//       </div>
//     </div>
//   </div>
 
 
 
//   */}
  );
};

