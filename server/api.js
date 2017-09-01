'use strict'
const express = require('express');
const api = express.Router();

const db = require('../db');
const Sequelize = require('sequelize');
const models = require('../db/models');
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

// MY NOTES - STILL NEED TO FIX MY PUT AND DELETE ROUTES
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campuses', function (req, res){
	models.Campus.findAll({})
	.then((campuses)=>res.json(campuses))
});



api.get('/students', function(req, res, next){
	models.Students.findAll({})
		.then(result => res.json(result))
		.catch(next)
	}
)

api.get(`/campuses/:id`, (req, res) => {
	models.Campus.findOne({where: {id: req.params.id}})
		.then(result => res.json(campus))
		.catch(next)
}
)

api.get(`/students/:id`, (req, res) => 
	models.Students.findOne({where: {id: req.params.id}})
		.then(result => res.json(result))
)

api.post(`/students`, (req, res) => {
	models.Students.create(req.body)
		.then(result => res.json(result))
		.catch(console.error)
})

api.post(`/campuses`, (req, res) => {
	models.Campus.create(req.body)
		.then(result => res.json(result))
		.catch(console.error)
})

api.put(`/students/:id`, (req, res) => {
	models.Students.update(
	{name: req.body.name, email: req.body.email},
	{
	where: {id: req.params.id},
	returning: true
	}
)
	.then(result => res.json(result))
	.catch(console.error)
})

api.put(`/campuses/:id`, (req, res) => {
	models.Campus.update(
	{name: req.body.name},
	{
	where: {id: req.params.id},
	returning: true
	}
)
	.then(result => res.json(result))
	.catch(console.error)
})

api.delete(`/campuses/:id`, (req, res) => {
	models.Campus.destroy(
	{
	where: {id: req.params.id},
	returning: true
	}
)
	.then(result => res.json(result))
	.catch(console.error)
})

api.delete(`/students/:id`, (req, res) => {
	models.Students.destroy(
	{
	where: {id: req.params.id}
	}
)
	.then(function(result){res.json(result)})
	.catch(console.error)
})

module.exports = api;