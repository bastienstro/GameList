import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

library.add(fasHeart, farHeart);

const RoundButton = styled.button`
  padding: 6px 7px 5px;
  font-size: 18px;
  border: 1px solid #ccc;
  box-shadow: 0 1px #ffffff inset, 0 0px 1px rgba(34, 25, 25, 0.4);
  font-weight: bold;
  cursor: pointer;
  background: #ffffff;
  border-radius: 50%;
  transition: all 1s;
  position: relative;
  color: #ffa537;

  ${props =>
    props.stick &&
    `
      position:absolute; 
      right:20px;
      top:-15px;
    `}

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 165, 55, 0.1) inset,
      0px 0px 4px 1.5px rgba(74, 74, 74, 0.2);
  }
  
  &:focus {
    outline: 0;
  }
`;

const PlayButton = styled.button`
  background: linear-gradient(to bottom, #ffa537 0%, #ffcc42 100%); /* W3C */
  border: none;
  border-radius: 5px;
  border-bottom: 4px solid #ffa537;
  color: #fbfbfb;
  padding: 5px 20px;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Arial", sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 30px;
  text-align: left;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const HeartButton = props => (
  <RoundButton {...props}>
    {props.children}{" "}
    <FontAwesomeIcon icon={props.active ? fasHeart : farHeart} />
  </RoundButton>
);

export { RoundButton, PlayButton, HeartButton };
