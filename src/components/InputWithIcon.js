import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  color: var(--body-text);
  display: flex;
  background-color: var(--bg_default);
  box-shadow: 1px 1px 6px 1px var(--lines-color);
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 93%;
  height: 47px;
  padding: 10px;
`;

// const SearchIcon = styled.ion-icon`
//   font-size: 17px;
//   font-weight: lighter;
//   margin-right: 5px;
// `;

const SearchInput = styled.input`
  background-color: var(--bg_default);
  width: 100%;
  padding: 0.6rem;
  border: none;
  font-size: 16px;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;

const TypeSelector = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-around;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1.5px solid var(--lines-color);
  padding: 3.5px 9px;
  width: 100%;
  padding-left: 10px;
  align-items: stretch;
`;

const Label = styled.label`
  font-size: 12px;
  padding-left: 4px;
`;

const Select = styled.select`
  background-color: var(--bg_default);
  color: var(--body-text);
  border: none;
  outline: none;
  font-size: 15px;
  &:active {
    border: none;
  }
`;

const Container = styled.div`
  margin: 0px 4%;
`;

export const InputWithIcon = ({ icon, placeholder, onChange, value }) => {
  return (
    <SearchBarContainer className="search-bar">
      <Search className="search">

        {/* <SearchIcon className="search-icon" name="search"></SearchIcon>   */}
        <SearchInput type="text" value={value} onChange={onChange} placeholder="Search the website..." />
      </Search>
      <TypeSelector className="type-selector">
        <Options className="options">
          <Label htmlFor="sortOptions">Sort by:</Label>
          <Select name="courses" id="sort-options">
            <option value="topic">Topic</option>
            <option value="name">Author</option>

          </Select>
        </Options>
        <Options className="options">
          <Label htmlFor="filterOptions">Filter by:</Label>
          <Select name="courses" id="filter-options">
          <option value="Web Development Languages">
                  Web Development Languages</option>
                <option value="Frontend Frameworks and Libraries">Frontend Frameworks and Libraries</option>
                <option value="Backend Frameworks and Libraries">Backend Frameworks and Libraries</option>
                <option value="Databases and APIs">Databases and APIs</option>
                <option value="Web Development Concepts and Technologies">Web Development Concepts and Technologies</option>

          </Select>
        </Options>
      </TypeSelector>
    </SearchBarContainer>
  );
};

