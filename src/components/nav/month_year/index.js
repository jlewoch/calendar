import { connect } from 'react-redux';
import MonthYearDisplay from './MonthYearDisplay';
import {
  changeViewingMonth,
  changeViewingYear
} from '../../../store/calendar/actions';
const mapStateToProps = ({ calendar }) => ({
  year: calendar.viewing.year,
  month: calendar.viewing.month
});

const mapDispatchToProps = dispatch => ({
  changeMonth: e => dispatch(changeViewingMonth(e)),
  changeYear: e => dispatch(changeViewingYear(e))
});

export const MonthYear = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthYearDisplay);
