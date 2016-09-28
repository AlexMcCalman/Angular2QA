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
var person_service_1 = require('./person.service');
var AddPersonComponent = (function () {
    function AddPersonComponent(personService) {
        this.personService = personService;
    }
    AddPersonComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    AddPersonComponent.prototype.latestPerson = function () {
        return this.people[this.people.length - 1];
    };
    AddPersonComponent.prototype.generateId = function () {
        return (this.people[(this.people.length - 1)].id + 1);
    };
    AddPersonComponent.prototype.addPerson = function (name, fact) {
        if (name && (name != '')) {
            this.personService.addPerson(this.generateId(), name, fact);
        }
    };
    AddPersonComponent.prototype.getPeople = function () {
        var _this = this;
        this.personService.getPeople()
            .then(function (people) { return _this.people = people; });
    };
    AddPersonComponent = __decorate([
        core_1.Component({
            selector: 'add-person',
            templateUrl: 'add-person.template.html',
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], AddPersonComponent);
    return AddPersonComponent;
}());
exports.AddPersonComponent = AddPersonComponent;
//# sourceMappingURL=add-person.component.js.map