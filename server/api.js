'use strict'
const api = require('express').Router()
const db = require('../db')
const School = require('../db/models/index').School;
const Students = require('../db/models/index').Students;
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campus',function(req,res,next){
	School.findAll({
		include:[Students]
	}).then((schools)=>{res.send(schools)});
})

api.get('/campus/:id',function(req,res,next){
	School.findOne({
		where:{
			id:req.params.id
		}
	})
	.then((school)=>{res.send(school)})
})

api.post('/campus',function(req,res,next){
	//console.log('req.body in route',req.body);
	School.findOrCreate({
		where: req.body
	}).spread((user,created)=>{
		//console.log('user??',user);
		res.send(user)})
})

api.put('/campus/:id',function(req,res,next){
	School.findById(req.params.id)
	.then((school)=>{school.update(req.body)})
	.then((ret)=>res.send('put!'));
})

api.delete('/campus/:id',function(req,res,next){
	School.destroy({
		where:{
			id: req.params.id
		}
	})
	.then((school)=>{this.send('deleted!')});
})

api.get('/students',function(req,res,next){
	Students.findAll({include:[School]}).then((studs)=>{res.send(studs)});
})

api.get('/students/:id',function(req,res,next){
	Students.findOne({
		where:{
			id:req.params.id
		}
	})
	.then((studs)=>{res.send(studs)})
})

api.post('/students',function(req,res,next){
	Students.findOne({
		where:{
			name: req.body.name
		}
	})
	.then((school)=>{
		return Student.findOrCreate({name: req.body.name,
						email: req.body.email,
						schoolId: school})
	})
	.spread((user,created)=>{res.send(user)})
})

api.put('/students/:id',function(req,res,next){
	Students.findById(req.params.id)
	.then((stud)=>{stud.update(req.body)})
	.then((ret)=>res.send('put!'));
})

api.delete('/students/:id',function(req,res,next){
	Student.destroy({
		where:{
			id: req.params.id
		}
	})
	.then((stud)=>{this.send('deleted!')});
})


module.exports = api