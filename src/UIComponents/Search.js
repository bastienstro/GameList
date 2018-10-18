import React from "react";
import styled from "styled-components";
import { HeartButton } from "./Buttons";

export const Input = styled.input`
  background: transparent;
  border-radius: 0.4rem;
  transition: all 1s;
  flex: 0 1;
  border: 1px solid #ccc;
  box-shadow: 0 1px #ffffff inset, 0 0px 1px rgba(34, 25, 25, 0.4);
  letter-spacing: 1px;
  color: #ffa537;
  transition: all 1s;
  font-size: 16px;
  height: 18px;
  padding: 7px 10px;
  margin: 10px;
  color: #bbb;
  font-size: 0.8rem;

  &:focus {
    outline: 0;
  }

  &:hover {
    transition: all 1s;
    box-shadow: 0px 0px 4px 1.5px rgba(74, 74, 74, 0.2);
  }
  &::placeholder {
    color: #bbb;
  }

  @media (max-width: 1000px) {
    width: calc(100% - 120px);
  }
`;

export const Counter = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 2px;
  width: 15px;
  font-size: 12px;
  border: 1px solid #ffa537;
  box-shadow: 0 1px #ffffff inset, 0 0px 1px rgba(34, 25, 25, 0.4);
  cursor: pointer;
  font-weight: bold;
  background: #ffa537;
  border-radius: 50%;
  transition: all 1s;
  color: #ffffff;
`;

export const Filter = ({ counter, onClick, children, active }) => {
  return (
    <HeartButton onClick={onClick} active={active}>
      {counter ? <Counter>{counter}</Counter> : null}
      {children}
    </HeartButton>
  );
};

export const SearchForm = ({ search, onSearchChange, filters, onFilter }) => (
  <React.Fragment>
    <Input
      placeholder={"find your game"}
      value={search}
      onChange={onSearchChange}
    />
    <Filter
      counter={filters.favorites.counter()}
      onClick={() => onFilter("favorites")}
      active={filters.favorites.active}
    />
  </React.Fragment>
);

