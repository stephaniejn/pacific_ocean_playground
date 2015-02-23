/**
 * PagesController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 var request = require("request")

 var FLICKR_OCEAN_KEY = process.env.FLICKR_OCEAN_KEY
 var FLICKR_OCEAN_SECRET = process.env.FLICKR_OCEAN_SECRET

module.exports = {
	index: function(req, res){
		res.view('index');
	},
	api_data: function(req, res){
		request(('http://tidesandcurrents.noaa.gov/api/datagetter?date=latest&station='+req.body.input+'&product=air_temperature&units=english&time_zone=gmt&application=ports_screen&format=json'), function(error, response, body){
			if (!error && response.statusCode == 200) {
    			var result = JSON.parse(body)
    			res.send(result)
 			 }
		})
	},
	image_data: function(req, res){
		request(('https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key='+FLICKR_OCEAN_KEY+'&group_id=553301@N20&format=json&nojsoncallback=1'), function(error, response, body){
			if (!error && response.statusCode == 200) {
    			var result = JSON.parse(body)
    			res.send(result)
 			 }
		})
	}
};

