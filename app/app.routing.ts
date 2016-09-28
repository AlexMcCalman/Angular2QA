import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { PersonListComponent } from './person-list.component';
import { RefinedListComponent } from './refined-list.component';
import { PersonDetailComponent } from './person-detail.component';
import { AddPersonComponent } from './add-person.component';

const appRoutes: Routes = [
	{path: 'home', component: AppComponent},
	{path: 'full', component: PersonListComponent},
	{path: 'refine', component: RefinedListComponent},
	{path: 'add', component: AddPersonComponent},
	{path: 'person/:id', component: PersonDetailComponent}
];

export const appRoutingProviders: any[] = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);