const request = require('request');
const schedule = require('node-schedule');

var crontab = require('./data/schedule.json');

crontab.jobs.forEach(job => {
    
    schedule.scheduleJob(job.time, function(fireDate){

        request(job.url, function (error, response, body) {
            console.log(job.name || job.url, 'triggered at', fireDate);
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the body
        });

    });

});