import { createReducer } from 'redux-act';
import * as types from './actionTypes';
import moment from 'moment';
const current = moment();
const initialState = {
  daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
  today: current.format('LL'),
  events: [
    {
      id: 1,
      title: 'Teal',
      startDate: '9/1/2019',
      endDate: '9/3/2019'
    },

    {
      id: 3,
      title: 'Khaki',
      startDate: '9/8/2019',
      endDate: '9/8/2019'
    },
    {
      id: 4,
      title: 'Blue',
      startDate: '9/3/2019',
      endDate: '9/6/2019'
    },
    {
      id: 5,
      title: 'Teal',
      startDate: '9/6/2019',
      endDate: '9/7/2019'
    },
    {
      id: 6,
      title: 'Puce',
      startDate: '9/8/2019',
      endDate: '9/8/2019'
    },
    {
      id: 7,
      title: 'Crimson',
      startDate: '9/25/2019',
      endDate: '9/26/2019'
    },
    {
      id: 8,
      title: 'Yellow',
      startDate: '9/18/2019',
      endDate: '9/18/2019'
    },
    {
      id: 9,
      title: 'Violet',
      startDate: '9/5/2019',
      endDate: '9/5/2019'
    },
    {
      id: 10,
      title: 'Turquoise',
      startDate: '9/1/2019',
      endDate: '9/2/2019'
    },
    {
      id: 2,
      title: 'Puce',
      startDate: '9/3/2019',
      endDate: '9/3/2019'
    }
  ],
  viewing: {
    year: current.year(),
    month: current.month(),
    firstWeek: current.startOf('month').week(),
    weeks: calculateWeeks(current.month(), current.year())
  }
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

function calculateWeeks(month, year) {
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
}

function changeMonth(state, payload) {
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
}
