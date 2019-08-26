import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

export default class ContextMenuWrapper extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired
  };
  state = {
    visible: false,
    top: 0,
    left: 0
  };

  _handleContextMenu = e => {
    event.preventDefault();
    this.setState({ visible: true, top: e.clientY, left: e.clientX });
  };

  _handleScroll = () => this.setState({ visible: false });

  _handleClick = () => this.setState({ visible: false });
  componentDidMount() {
    document.addEventListener('scroll', this._handleScroll);
    document.addEventListener('click', this._handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this._handleScroll);
    document.removeEventListener('click', this._handleClick);
  }

  render() {
    const { top, left, visible } = this.state;
    return (
      <div onContextMenu={this._handleContextMenu}>
        {visible && (
          <div style={{ top, left }} className="contextMenu">
            {this.props.options.map((option, idx) => (
              <MenuItem
                key={idx}
                {...option}
                last={this.props.options.length - 1 === idx}
                first={idx === 0}
              />
            ))}
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
ContextMenuWrapper.defaultProps = {
  options: [
    { label: 'Option 1', click: e => console.log('Option 1 Selected', e) },
    { label: 'Option 2', click: e => console.log('Option 2 Selected', e) },
    { label: 'Option 3', click: e => console.log('Option 3 Selected', e) }
  ]
};
