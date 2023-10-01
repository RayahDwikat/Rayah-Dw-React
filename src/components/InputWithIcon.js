import React from 'react';
import "../CSS/styles.css";



export const InputWithIcon = ({ icon, placeholder, onChange, value }) => {
  return (<>
 <div class="search-bar container">
    <div class="search">
      <ion-icon class="search-icon" name="search"></ion-icon>
      <input type="search" name="search" id="search" placeholder="Search the website..."/>
    </div>
    <div class="type-selector">
      <div class="options">
        <label for="sortOptions"> Sort by: </label>
        <select name="courses" id="sort-options"> 
          <option>Default</option>
        </select>
      </div>
      <div class="options">
        <label for="filterOptions"> Filter by: </label> 
        <select name="courses" id="filter-options"> 
          <option>Default</option>
          <option value="Author">Author</option>
          <option value="Rating">Rating</option>
        </select>
      </div>
    </div>
  </div>
 
 
 
 </>
  );
};

