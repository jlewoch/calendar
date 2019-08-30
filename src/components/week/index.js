import { connect } from 'react-redux';
import WeekDisplay from './WeekDisplay';
const mapStateToProps = ({ calendar }) => ({
  firstWeek: calendar.viewing.firstWeek,
  days: calendar.daysOfWeek,
  year: calendar.viewing.year
});

const mapDispatchToProps = dispatch => ({});

export const Week = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekDisplay);
