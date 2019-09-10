import moment from 'moment';
export const sortEvents = ({ events, week, year }) => {
  // get week events from list
  let rowEvents = events
    .filter(
      e =>
        moment(new Date(e.endDate)).year() === year &&
        (moment(new Date(e.startDate)).week() === week ||
          moment(new Date(e.endDate)).week() === week)
    )
    .sort(
      (a, b) => moment(new Date(a.startDate)) > moment(new Date(b.startDate))
    );
  const startOfWeek = moment()
    .week(week)
    .startOf('week')
    .date();
  // latest endDate for current row of events
  let available = startOfWeek;
  // new array to put sorted list into
  let arr = [];
  // used to select index of array
  let idx = 0;
  // sorting untill passed clone array is empty and sorted
  while (rowEvents.length > 0) {
    // event object at specified index
    let el = rowEvents[idx];
    const startDate = moment(new Date(el.startDate)).date();
    if (
      //  if the start date is greater than the current end date of the row or if its the begining of a row and the first day of the week push event
      startDate > available ||
      (available === startOfWeek && startDate === startOfWeek)
    ) {
      available = moment(new Date(el.endDate)).date();
      arr.push(...rowEvents.splice(idx, 1));
    } else {
      // add one index to check next event
      idx++;
    }
    // if this is the last index put item into the end of the array
    if (rowEvents.length === 1) {
      arr.push(...rowEvents.splice(0, 1));
    }

    // if the current index is longer the length of the array then set back to 0
    if (idx > rowEvents.length - 1) {
      idx = 0;
      available = startOfWeek;
    }
  }
  return arr;
};
