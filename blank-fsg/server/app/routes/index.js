'use strict';
var router = require('express').Router();
var Vimeo = require('vimeo').Vimeo;

var CLIENT_ID = '64609c92a00b79a53954f3651684696894c5dde9';
var CLIENT_SECRET = 'lthq/Mfrm2GwO9CxrEQCjfX/2Kj73jHz8NKUYiJAP4Mv7XLqktxi9I0+2qXnoISecnQfEyau0+vAXKUnXQjF1KC0i5hx4Vl8MUYXaQf/hfWmP9+lc9L/D9vVF1RmEy0C';
var ACCESS_TOKEN = 'da3afa26f2ad5ad05a97a712489fa18d';


var lib = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
let scope = 'public private';
module.exports = router;

// scope is an array of permissions your token needs to access. You can read more at https://developer.vimeo.com/api/authentication#scopes
lib.generateClientCredentials(scope, function(err, access_token) {
    if (err) {
        throw err;
    }

    var token = access_token.access_token;
    // Other useful information is included alongside the access token
    // We include the final scopes granted to the token. This is important because the user (or api) might revoke scopes during the authentication process
    var scopes = access_token.scope;
});

router.use('/members', require('./members'));



router.get('/videos', function(req, res, next) {
    lib.request(/*options*/{
        // This is the path for the videos contained within the staff picks channels
        path : '/users/outfiteditorial/videos?sort=date&direction=asc',
        // This adds the parameters to request page two, and 10 items per page
        // query : {
        //     page : 2,
        //     per_page : 10
        // }
    }, /*callback*/function (error, body, status_code, headers) {
        if (error) {
            console.log('error');
            console.log(error);
        } else {
        	res.send(body);
        }
    });
})

// Make sure this is after all of
// the registered routes!
router.use(function(req, res) {
    res.status(404).end();
});