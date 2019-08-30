import { connect } from 'react-redux';
import MonthDisplay from './MonthDisplay';
const mapStateToProps = ({ calendar }) => ({
  firstWeek: calendar.viewing.firstWeek,
  weeks: calendar.viewing.weeks,
  days: calendar.daysOfWeek
});

const mapDispatchToProps = dispatch => ({});

export const Month = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthDisplay);
