var moment = require('moment');

export function formattedTimeDifference(start, end) {
  var startTime = moment.unix(start);
  var endTime = moment.unix(end);

  var ms = endTime.diff(startTime);
  var d = moment.duration(ms);
  var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

  return s;
}

export function formattedTimeRange(start, end) {
  var startTime = moment.unix(start).format("HH:mm:ss");
  var endTime = moment.unix(end).format("HH:mm:ss");

  return startTime + "-" + endTime;
}