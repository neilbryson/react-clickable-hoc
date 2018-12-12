const React = require('react');

const clickable = Component =>
  class WrappedComponent extends React.PureComponent {
    constructor(props) {
      super(props);

      this.onClick = this.onClick.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(e) {
      const { onClick } = this.props;

      if (onClick && typeof onClick === 'function') {
        onClick(e);
      }
    };

    onKeyDown(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        this.onClick(e);
      }
    };

    render() {
      const { onClick, onKeyDown, ...other } = this.props;

      return React.createElement(
        Component,
        { onClick: this.onClick, onKeyDown: this.onKeyDown, ...other },
        null
      )
    }
  };

module.exports = clickable;
