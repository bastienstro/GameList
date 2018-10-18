import React from "react";

export const addScrollListener = WrappedComponent => {
  // we only return the Y for our concerns, it's not a fully featured component
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scrollPosition: 0
      };
    }

    scrollHandler = () => {
      this.setState({
        scrollPosition: window.pageYOffset
      });
    };

    componentDidMount() {
      window.addEventListener("scroll", this.scrollHandler);
      //window.scrollTo(0,1)
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollHandler);
    }

    render() {
      return (
        <WrappedComponent
          scrollPosition={this.state.scrollPosition}
          {...this.props}
        />
      );
    }
  };
};
