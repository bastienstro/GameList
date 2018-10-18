import React from "react";
import styled from "styled-components";
import { RoundButton } from "./Buttons";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
  display: none;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  ${props =>
    props.isOpen &&
    `
      display:flex;
      z-index: 100;
      opacity:1;
    `};
`;
const Container = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  background: rgba(255, 255, 255, 0.98);
  display: flex;
  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
  border-radius: 5px;
`;

const CancelButton = styled(RoundButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 10px;
`;

export const Modal = ({ isOpen, children, onClose }) => (
  <Overlay isOpen={isOpen} onClick={onClose}>
    <Container onClick={e => e.stopPropagation()}>
      {children}
      <CancelButton onClick={onClose}>X</CancelButton>
    </Container>
  </Overlay>
);
