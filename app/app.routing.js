"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require('./app.component');
var person_list_component_1 = require('./person-list.component');
var refined_list_component_1 = require('./refined-list.component');
var person_detail_component_1 = require('./person-detail.component');
var add_person_component_1 = require('./add-person.component');
var appRoutes = [
    { path: 'home', component: app_component_1.AppComponent },
    { path: 'full', component: person_list_component_1.PersonListComponent },
    { path: 'refine', component: refined_list_component_1.RefinedListComponent },
    { path: 'add', component: add_person_component_1.AddPersonComponent },
    { path: 'person/:id', component: person_detail_component_1.PersonDetailComponent }
];
exports.appRoutingProviders = [];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map