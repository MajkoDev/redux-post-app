import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAge = ({ timestamp }) => {
  let timeAgo = "";

  // if we have timestamp
  // create a date, format a timePeriod
  // set timeAge

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAge;
