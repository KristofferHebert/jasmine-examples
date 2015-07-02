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

describe("app is defined", isDefined);
describe("app adds total", getTotal);
