// import axios from 'axios';
import 'es6-promise/auto';
import firebase from 'firebase/app';
import 'firebase/database'

const baseUrl = 'https://hacker-news.firebaseio.com'
const version = '/v0';
const config = {
	databaseURL: baseUrl
}

firebase.initializeApp(config)
const database = firebase.database().ref(version);

export const getStoryType = (type) => {
	database.child(`${type}stories`).once('value', snapshot => {
		const val = snapshot.val()
		console.log(val)
	})
}


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
