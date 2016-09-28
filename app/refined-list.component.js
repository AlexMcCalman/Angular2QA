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
var router_1 = require('@angular/router');
var person_service_1 = require('./person.service');
var RefinedListComponent = (function () {
    function RefinedListComponent(personService, router) {
        this.personService = personService;
        this.router = router;
        this.searchFilter = '';
    }
    RefinedListComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    ;
    RefinedListComponent.prototype.goToDetail = function (person) {
        var link = ['/person', person.id];
        this.router.navigate(link);
    };
    RefinedListComponent.prototype.getPeople = function () {
        var _this = this;
        this.personService.getPeople().then(function (people) { return _this.people = people; });
    };
    RefinedListComponent.prototype.personSelected = function (person) {
        this.selectedPerson = person;
    };
    ;
    RefinedListComponent = __decorate([
        core_1.Component({
            selector: 'refined-list',
            templateUrl: './refined-list.template.html',
            styleUrls: ['./person-list.style.css'],
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.Router])
    ], RefinedListComponent);
    return RefinedListComponent;
}());
exports.RefinedListComponent = RefinedListComponent;
//# sourceMappingURL=refined-list.component.js.map