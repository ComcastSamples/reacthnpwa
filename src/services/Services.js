// import axios from 'axios';
import 'es6-promise/auto';
import firebase from 'firebase/app';
import 'firebase/database';

const baseUrl = 'https://hacker-news.firebaseio.com';
const version = '/v0';
const config = {
	databaseURL: baseUrl
};
const options = {
	method: 'GET',
	headers: {
		Accept: 'application/json'
	}
};

firebase.initializeApp(config);
const database = firebase.database().ref(version);

export const getStoryType = async (type) => {
	return await database.child(`${type}stories`).once('value').then(data => {
		return data.val();
	})
};

export const getItem = (id) => {
	const URL = `${baseUrl}${version}/item/${id}.json`;

	return fetch(URL, options).then((response) => {
		return response.json();
	});
};

// let topStories = {};

// export const getType = () => {
// 	axios
// 		.get(`${endPoint}${version}topstories.json`)
// 		.then(function(response) {
// 			return Promise.all(
// 				response.data.map((item) => {
// 					return getItem(item);
// 				})
// 			);
// 		})
// 		.catch(function(error) {
// 			return error;
// 		});
// };

// export const getItem = (id) => {
// 	axios
// 		.get(`${endPoint}${version}${item}${id}.json`)
// 		.then(function(response) {
// 			return Promise.resolve(response.data);
// 		})
// 		.catch(function(error) {
// 			return error;
// 		});
// };
