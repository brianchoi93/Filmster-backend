const axios = require('axios')
const fs = require('fs')


let baseURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=ae1cce55ec63eb09f1b08eb97668ec07&language=en-US&page=1
`
let movieCount = 10

let ids = []

// build array of random ids
for(let i = 0; i < movieCount; i++) {
	let rand = Math.floor(Math.random() * 10000)
	ids.push(rand)
}

// build 10 urls to make calls to, and return array of promises with those urls
let calls = ids.map(id => `${baseURL}${id}`)
.map(url => axios.get(url))

// execute all promises, writing to disk if successful
Promise.all(calls)
.then(success => {
	let collectedData = success.map(res => res.data)
	let stringified = JSON.stringify(collectedData)
	fs.writeFile(__dirname + '/movie.json', stringified, 'utf8', (err) => {
		if(err) {
			console.error(err)
		}
		else {
			console.log(`successfully wrote ${collectedData.length} records to db/movie.json`)
		}
	}) 
})
.catch(err => {
	console.error(err)
	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
})
