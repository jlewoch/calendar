import moment from 'moment';
const event = ({
  title,
  startDate = moment(),
  endDate,
  description,
  notes
}) => ({
  title,
  startDate,
  endDate: endDate ? endDate : startDate,
  description,
  notes
});
