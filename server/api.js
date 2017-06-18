'use strict'
const api = require('express').Router()
const db = require('../db')
const Temperature = require('../db/models/index').Temperature;
const Day = require('../db/models/index').Day;
const User = require('../db/models/index').User;
const Promise = require('bluebird');
var accountSid = 'ACd7ec1f85d7b3df8f5e6f52829a33fc32';
var authToken = 'd9873433bac7f536b0236fc06ee4e956';
var client = require('twilio')(accountSid, authToken);

  
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/cats/:name/:temp',function(req,res,next){
	console.log('in cats',req.params.temp);
		client.messages.create({ 
          to: "+19149245510", 
          from: "+19148254647", 
          body: req.params.name+ " has a high temperature of "+req.params.temp, 
          }, function(err, message) {
          if(err)
            console.log('error!'); 
            console.log(message.sid);

        });
        res.send('complete');
})

api.get('/emergency/:name/:temp',function(req,res,next){
		console.log('in emergency',req.params.temp);
		client.messages.create({ 
          to: "+19149245510", 
          from: "+19148254647", 
          body: req.params.name+ " has a dangerously high temperature of "+req.params.temp, 
          }, function(err, message) {
          if(err)
            console.log('error!'); 
            console.log(message.sid);

        });
        res.send('complete')
})

api.get('/name',function(req,res,next){
	User.findOne({})
		.then((user)=>{
			if(!user)
				res.send({name:''})
			else
				res.send(user);
		})
})

api.put('/name',function(req,res,next){

	User.findOne({})
		.then((user)=>{
			if(user)
				return user.update(req.body)
			else
				return User.create(req.body)
		})
		.then((user)=>{
			if(!user)
				res.sendStatus(404)
			else
				res.send(user);
		})
})


/*api.get('/:temp',function(req,res,next){
	console.log('inhere?')
	var temp = req.params.temp;
	var m = new Date();
	m = m.toString();
	m = m.split(' ');
	var date = m[1]+'-'+m[2]+'-'+m[3];
	var time = m[4];
	console.log('DATE+TIME',date,time)
	var temp = Temperature.create({degrees:temp, time:time, partDate:date})
	var day = Day.findOrCreate({
		where:{ 
			date:date
	}});
	Promise.all([temp,day]).spread((temp,day)=>{
		console.log('?????',temp,day)
		temp.setDay(day[0])
	})
	.then((sth)=>{
		console.log('what??')
		res.sendStatus(200);
	})
	.catch(console.error)

})*/

api.post('/',function(req,res,next){
	console.log('inhere?')
	var temp = req.body.temp;
	var m = new Date();
	m = m.toString();
	m = m.split(' ');
	var date = m[1]+'-'+m[2]+'-'+m[3];
	var time = m[4];
	console.log('DATE+TIME',date,time)
	var temp = Temperature.create({degrees:temp, time:time, partDate:date})
	var day = Day.findOrCreate({
		where:{ 
			date:date
	}});
	Promise.all([temp,day]).spread((temp,day)=>{
		console.log('?????',temp,day)
		temp.setDay(day[0])
	})
	.then((sth)=>{
		console.log('what??')
		res.sendStatus(200);
	})
	.catch(console.error)

})

api.get('/temps/:day',function(req,res,next){
	Temperature.findAll({where:{dayId: req.params.day},order:'id ASC'})
	.then((tempArr)=>{
		if(!tempArr.length)
			res.send('no!')
		else
			res.send(tempArr);
	})
})

api.get('/allTemps',function(req,res,next){
	Temperature.findAll({order:'id ASC'})
	.then((tempArr)=>{
		if(!tempArr.length)
			res.send('no!')
		else
			res.send(tempArr);
	})
})




module.exports = api