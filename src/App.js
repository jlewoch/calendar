import React, { Component } from 'react';
import moment from 'moment';
import MonthDisplay from './views/month/MonthDisplay';
import Navigator from './components/Navigator';
export default class App extends Component {
  today = moment();
  state = {
    year: 2019,
    month: moment().month(),
    firstWeek: moment()
      .date(1)
      .weeks()
  };
  onMonthChange = month => {
    firstWeek: moment()
      .date(1)
      .weeks();
  };
  render() {
    const { firstWeek, year } = this.state;
    return (
      <div className="calendar">
        <Navigator year={year} />
        <MonthDisplay firstWeek={firstWeek} today={this.today} />
      </div>
    );
  }
}
