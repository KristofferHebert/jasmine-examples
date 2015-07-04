'use strict';

function isDefined() {
    it('Expect app to be defined', function appIsdefinedfunction() {
        expect(app).toBeDefined();
    });
}

function getTotal() {
    it('Expect app total method to add inputs', function addsTwoInputsTogether() {
        expect(app.getTotal(1,2)).toBe(3);
    });
}

function homepageReturns200(done) {
    it('get homepage and expect 200', function homePageReturns200(){
        request('http://localhost:3000/', function testResponse(err, response, body){
            expect(response.statusCode)toBe(200);
            done();

        });
    })
}

function protectedPageReturns403(done) {
    it('get homepage and expect 200', function homePageReturns200(){
        request('http://localhost:3000/', function testResponse(err, response, body){
            expect(response.statusCode)toBe(200);
            done();
        });
    })
}

describe("app is defined", isDefined);
describe("app adds total", getTotal);
