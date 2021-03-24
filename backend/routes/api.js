/** @format */

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

const db = 'mongodb+srv://aagr:aishwary@cluster0.qltkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('mongodb is connected');
	})
	.catch((error) => {
		console.log('mondb not connected');
		console.log(error);
	});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('DB connected successfully');
});

router.post('/register', (req, res) => {
	const userData = req.body;
	let user = new User(userData);
	user.save((err, reg) => {
		if (err) {
			console.log(err);
		} else {
			let payload = { subject: reg._id };
			let token = jwt.sign(payload, 'secretkey');
			res.status(200).send({ token });
		}
	});
});

router.post('/login', (req, res) => {
	let userData = req.body;

	User.findOne({ email: userData.email }, (err, user) => {
		if (err) {
			console.log(err);
		} else {
			if (!user) {
				res.status(401).send('User Not found');
			} else {
				if (user.password !== userData.password) {
					res.status(401).send('Invalid Credentials');
				} else {
					let payload = { subject: user._id };
					let token = jwt.sign(payload, 'secretkey');
					res.status(200).send({ token });
				}
			}
		}
	});
});

router.get('/events', (req, res) => {
	let events = [
		{
			_id: '1',
			name: 'Auto Expo',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '2',
			name: 'Auto Expo',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '3',
			name: 'Auto Expo',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '4',
			name: 'Auto Expo',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '5',
			name: 'Auto Expo',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '6',
			name: 'Auto Expo',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
	];
	res.json(events);
});

router.get('/special', (req, res) => {
	let specialEvents = [
		{
			_id: '1',
			name: 'Auto Expo Special',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '2',
			name: 'Auto Expo Special',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '3',
			name: 'Auto Expo Special',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '4',
			name: 'Auto Expo Special',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '5',
			name: 'Auto Expo Special',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
		{
			_id: '6',
			name: 'Auto Expo Special',
			description: 'lorem ipsum',
			date: '2012-04-23T18:25:43.511Z',
		},
	];
	res.json(specialEvents);
});

// router.route('/').get((req, res) => {
// 	User.find()
// 		.then((users) => res.send(users))
// 		.catch((err) => res.status(400).json('Error: ' + err));
// });

module.exports = router;
