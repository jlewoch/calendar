import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

export default class ContextMenuWrapper extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired
  };
  menu = createRef();
  state = {
    visible: false,
    top: 0,
    left: 0
  };
  // opens context menu on cursor location
  _handleContextMenu = e => {
    e.preventDefault();
    e.stopPropagation();
    const menu = this.menu.current;

    const height = menu.clientHeight;
    const width = menu.clientWidth;

    let top = e.pageY;
    let left = e.pageX;

    const bottom = height + e.clientY;
    const right = width + e.clientX;

    // offset menu when opened too close to the bottom
    if (bottom > window.innerHeight) {
      top -= height;
    }
    if (right > window.innerHeight) {
      left -= width;
    }
    console.log('top :', top);
    this.setState({
      visible: true,
      top,
      left
    });
    this.target = e;
  };

  // hide menu when users scrolling
  _handleScroll = () => this.setState({ visible: false });

  // hide menu when user clicks
  _handleClick = () => this.setState({ visible: false });

  componentDidMount() {
    // apply listeners
    document.addEventListener('scroll', this._handleScroll);
    document.addEventListener('click', this._handleClick);
  }
  componentWillUnmount() {
    // remove listeners to prevent mem leak
    document.removeEventListener('scroll', this._handleScroll);
    document.removeEventListener('click', this._handleClick);
  }

  render() {
    const { top, left, visible } = this.state;
    return (
      <div onContextMenu={this._handleContextMenu} className="container">
        <div
          ref={this.menu}
          style={{
            visibility: visible ? 'visible' : 'hidden',
            top,
            left
          }}
          className="contextMenu"
        >
          {this.props.options.map((option, idx) => (
            <MenuItem
              key={idx}
              {...option}
              // passed to ensure styling for top and bottom when hovering
              last={this.props.options.length - 1 === idx}
              first={idx === 0}
              // passed so onclick action can return origional target
              target={this.target}
            />
          ))}
        </div>

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
