'use strict';

const http = require('http');
const http = require('fs');

const server = http.createServer(function(request, response) {

    console.log(request.method, request.url);

    if (request.url == 'style/css') {
        
    }

}
    
)   