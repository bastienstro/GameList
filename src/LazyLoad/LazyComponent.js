import React from "react";
import ReactDOM from "react-dom";

export class LazyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom >= 0 && rect.top <= window.innerHeight;
  }
  loadController = () => {
    const element = ReactDOM.findDOMNode(this.el);
    if (!!element) {
      if (this.isElementInViewport(element) && !this.state.loaded) {
        this.setState({ loaded: true });
      }
    }
  };

  componentDidMount() {
    this.loadController();
  }

  componentDidUpdate() {
    this.loadController();
  }

  render() {
    const hasScrollHandler = typeof this.props.scrollPosition !== "undefined";

    if (!this.state.loaded && hasScrollHandler) {
      return this.props.placeholder(el => (this.el = el));
    } else {
      return this.props.children;
    }
  }
}