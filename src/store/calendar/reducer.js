import { createReducer } from 'redux-act';
import * as types from './actionTypes';
import moment from 'moment';

const initialState = {
  daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
  today: moment().format('LL'),
  events: {},
  viewing: { year: 2019, month: 0, firstWeek: 1, weeks: 5 }
};

const calendar = createReducer(
  {
    [types.CHANGE_VIEWING_MONTH]: (state, payload) =>
      changeMonth(state, payload),

    [types.CHANGE_VIEWING_YEAR]: (state, payload) => ({
      ...state,
      viewing: {
        ...state.viewing,
        year: state.viewing.year + payload
      }
    })
  },
  initialState
);
export default calendar;

const calculateWeeks = (month, year) => {
  // create moment instance for specified month and year
  const momentObj = moment()
    .month(month)
    .year(year);
  // get the week number for the first day in the month
  const first = momentObj.startOf('month').week();
  // get the week number for the last day in the month
  let last = momentObj.endOf('month').week();

  // In case last week is in next year
  if (first > last) {
    last = 53;
  }
  // return the difference
  return last - first + 1;
};

const changeMonth = (state, payload) => {
  // create moment instance that is updated based on the payload either 1 or -1
  const updated = moment()
    .year(state.viewing.year)
    .month(state.viewing.month)
    .add(payload, 'month');
  // define month and year
  const month = updated.month();
  const year = updated.year();
  // return new state
  return {
    ...state,
    viewing: {
      ...state.viewing,
      month,
      year,
      firstWeek: updated.startOf('month').week(),
      weeks: calculateWeeks(month, year)
    }
  };
};
