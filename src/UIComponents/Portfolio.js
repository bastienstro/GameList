import React from "react";
import styled from "styled-components";
import { HeartButton, PlayButton } from "./Buttons";
import { FlexBox, FlexItem } from "./Layout";
import { LazyImage } from "../LazyLoad/LazyImage";
import { LazyComponent } from "../LazyLoad/LazyComponent";
import { addScrollListener } from "../LazyLoad/HOC";

export const Description = styled.div`
  margin: 0;
  position: relative;
  padding: 10px;
  background: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  transition: all 0.5s;
`;

export const Box = styled.div`
  flex: 1 0 50%;
  max-width: calc(50% - 20px);
  box-sizing: border-box;
  background: #fff;
  margin: 10px;
  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  flex-flow: column wrap;
  padding: 0px;
  color: #ffa537;
  transition: all 1s;
  min-height: 330px;
  
  @media (max-width: 1000px) {
    max-width: 100%;
    margin: 10px 0px;
  }
  img {
    flex: 1;
    transition: all 1s;
    object-position: left;
  }

  ${props =>
    props.fullpage &&
    `
      width:100%;
      flex:1 0 100%;
      max-width:100%;
      cursor:default;
      margin:0px;
      box-shadow:none;
       
      img {
         flex:0;
       }
   `}
  
  &:hover {
    box-shadow: 0 1px #ffffff inset, 1px 0px 4px 2px rgba(34, 25, 25, 0.3);
    ${Description} {
      transform: translateY(-10px);
    }
    img {
      filter: contrast(1.5);
    }
  }
`;



export const Title = styled.h1`
  color: #ffa537;
  font-size: 1em;
`;

export const Paragraph = styled.p`
  color: #ccc;
`;


export const Game = ({
  name,
  short,
  fullpage,
  isFavorite,
  toggleFavorite,
  onClick
}) => {
  const src = `http://royal1.midasplayer.com/images/games/${short}/tournamentPage/${short}_764x260.jpg`;
  return (
    <Box onClick={onClick} fullpage={fullpage}>
      <LazyImage src={src} />
      <Description>
        <FlexItem>
          <Title>{name}</Title>
          {fullpage && <Lorem />}
        </FlexItem>

        {fullpage && (
          <FlexItem centered>
            <PlayButton
              href={""}
            >
              play me
            </PlayButton>
          </FlexItem>
        )}

        <HeartButton stick onClick={toggleFavorite} active={isFavorite} />
      </Description>
    </Box>
  );
};

export const Placeholder = styled(Box)`
  height: 330px;
`;

export const Lorem = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam
    non quam lacus suspendisse faucibus interdum. Viverra vitae congue eu
    consequat ac felis donec et.
  </Paragraph>
);

export const Portfolio = props => {
  const { data, renderItem, PlaceHolder, scrollPosition } = props;
  const lazy = typeof scrollPosition != "undefined" && !!PlaceHolder;
  return (
    <FlexBox margin="80px 0px 0px 0px">
      {data.map(
        (data, idx) =>
          lazy ? (
            <LazyComponent
              key={idx}
              {...props}
              placeholder={el => <PlaceHolder ref={el} />}
            >
              {renderItem(data)}
            </LazyComponent>
          ) : (
            renderItem(data)
          )
      )}
    </FlexBox>
  );
};


export const LazyPortfolio = addScrollListener(Portfolio);

