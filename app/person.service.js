"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var people_data_1 = require('./people.data');
var PersonService = (function () {
    function PersonService() {
    }
    PersonService.prototype.getPerson = function (id) {
        return this.getPeople()
            .then(function (people) { return people.find(function (person) { return person.id === id; }); });
    };
    PersonService.prototype.getPeople = function () {
        return Promise.resolve(people_data_1.PEOPLE);
    };
    PersonService.prototype.addPerson = function (id, name, fact) {
        var addedFact = fact || '';
        people_data_1.PEOPLE.push({ id: id, name: name, fact: fact });
    };
    PersonService.prototype.removePerson = function () { };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map