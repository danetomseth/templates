function Grid($http) {
	let grid = {};

	grid.fetchVideos = () => {
		console.log('videos');
		// $http.get('https://api.vimeo.com/users/[user_id]/albums/[album_id]/videos').then(function(res) {
		// 	console.log('data', res.data);
		// });
		// $http.get('https://api.vimeo.com/users/outfiteditorial').then(function(res) {
		// 	console.log('data', res.data);
		// })

		return $http.get('/api/videos')
		// .then(function(res) {
		// 	console.log('data', res.data);
		// })
	}


	return grid
}

//access token da3afa26f2ad5ad05a97a712489fa18d

//outfiteditorial


app.factory('GridFactory', Grid);