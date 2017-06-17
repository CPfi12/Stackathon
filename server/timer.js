var schedule = require('node-schedule');
 
var j = schedule.scheduleJob('16 * * * *', function(){
  console.log('Please work????');
});

module.exports = j;