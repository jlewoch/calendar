import React, { Component } from 'react';
import moment from 'moment';
import MonthDisplay from './views/month/MonthDisplay';
import Navigator from './components/Navigator';
export default class App extends Component {
  state = {
    display: { year: moment().format('YYYY'), month: moment().format('MMMM') },
    today: moment().format('LL'),
    firstWeek: moment()
      .date(1)
      .weeks()
  };

  navigationHandler = (amount, length) => {
    if (!amount || !length) {
      return;
    }
    const { month, year } = this.state.display;
    const updated = moment()
      .month(month)
      .year(year);
    amount > 0
      ? updated.add(amount, length)
      : updated.subtract(amount * -1, length);
    this.setState({
      display: { year: updated.format('YYYY'), month: updated.format('MMMM') },
      firstWeek: updated.date(1).weeks()
    });
  };

  render() {
    const { firstWeek, today, display } = this.state;
    return (
      <div className="calendar">
        <Navigator
          display={display}
          navigationHandler={this.navigationHandler}
        />
        <MonthDisplay display={display} firstWeek={firstWeek} today={today} />
      </div>
    );
  }
}
