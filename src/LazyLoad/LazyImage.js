import React from "react";
import styled from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  min-width: 100%;
  transition: opacity 1s;
  opacity: ${props => (props.loaded ? 1 : 0)};
`;

export class LazyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    const { src } = this.props;

    return (
      <Image
        {...this.state}
        src={src}
        onLoad={() => this.setState({ loaded: true })}
        alt={""}
      />
    );
  }
}