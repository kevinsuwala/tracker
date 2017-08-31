var moment = require('moment');

export function formattedTimeDifference(start, end) {
  var startTime = moment(start);
  var endTime = moment(end);

  var ms = endTime.diff(startTime);
  var d = moment.duration(ms);
  var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
  
  return s;
}

export function formattedTimeRange(start, end) {
  var startTime = moment(start).format("HH:mm:ss");
  var endTime = moment(end).format("HH:mm:ss");
  var temp = startTime;
  
  return startTime + "-" + endTime;
}
