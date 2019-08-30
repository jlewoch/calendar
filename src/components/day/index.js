import { connect } from 'react-redux';
import DayDisplay from './DayDisplay';
const mapStateToProps = ({ calendar }) => ({
  today: calendar.today
});

const mapDispatchToProps = dispatch => ({});

export const Day = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayDisplay);
