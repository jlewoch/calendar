import React, { Component } from 'react';
import { Month } from './views/month';
import Navigator from './components/nav/Navigator';
import ContextMenuWrapper from './components/contextmenu/ContextMenuWrapper';
import moment from 'moment';
export default class App extends Component {
  render() {
    return (
      <div className="container calendar with-header">
        <Navigator />
        <ContextMenuWrapper>
          <Month />
        </ContextMenuWrapper>
      </div>
    );
  }
}
