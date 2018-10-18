import React from "react";
import styled from "styled-components";

export const Page = styled.div`
  height: 100%;
  width: 100%;
  transition: filter 1s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.blur &&
    `
      filter: blur(3px);
    `};
`;

export const Container = styled.div`
  width: 70vw;
  display: flex;
  flex-flow: row wrap;
`;

export const Flexible = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: ${props => props.margin || 0 }
`;
export const FlexItem = styled.div`
  flex: 1 1;
  ${props =>
    props.centered && 
    `
      align-items:center;
      display:flex;
      justify-content:center;
    `};
`;
export const FlexBox = props => (
  <Flexible {...props}>
    <Container>{props.children}</Container>
  </Flexible>
);

export const StickyBar = styled(FlexBox)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: auto;
  background: #ffffff;
  box-shadow: 0 1px #ffffff inset, 0 1px 1px 2px rgba(255, 255, 255, 1);
`;

export const Menu = styled.div`
  flex: 1 0;
  text-align: right;
  margin: 5px 10px;
`;

export const LogoContainer = styled.div`
  flex: 0 1;
  margin: 5px 10px;
`;

export const Logo = () => (
  <LogoContainer>
    <img
      alt=""
      src="https://k1.midasplayer.com/images/logos/kingLogoRebrand.svg?_v=13wlhey"
      height="45rem"
    />
  </LogoContainer>
);

export const Header = ({ children }) => (
  <StickyBar>
    <Logo />
    <Menu>{children}</Menu>
  </StickyBar>
);
