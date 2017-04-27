const moment = require('moment');
const filter = {};

filter.relativeTime = time => moment(new Date(time * 1000)).fromNow();

filter.domain = url => url && url.split('/')[2];

module.exports = filter;
