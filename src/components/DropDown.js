
import React from 'react';

export const DropDown = ({ options, value, label, onChange }) => {
  return (
      <>   
   
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      </> 
  );
  
};
