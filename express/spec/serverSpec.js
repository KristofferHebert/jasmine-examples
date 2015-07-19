'use strict';

var request = require('request');

function getHome() {
    it('get homepage and expect 200', function homePageReturns200(done){
        request.get('http://localhost:3002/', function testResponse(err, response, body){
            expect(response.statusCode).toBe(200);
            done();

        });
    })
}

function getAdmin() {
    it('get admin and expect 403', function getAdminReturns403(done){
        request.get('http://localhost:3002/admin', function testResponse(err, response, body){
            expect(response.statusCode).toBe(403);
            done();
        });
    })
}

describe("Test home page", getHome);
describe("Test admin urls", getAdmin);
