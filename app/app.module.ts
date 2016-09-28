import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRouting, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list.component';
import { RefinedListComponent } from './refined-list.component';
import { PersonDetailComponent } from './person-detail.component';
import { AddPersonComponent } from './add-person.component';

import { FilterPipe } from './filter.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		appRouting
	],

	declarations: [
		AppComponent,
		PersonListComponent,
		RefinedListComponent,
		PersonDetailComponent,
		AddPersonComponent,
		FilterPipe
	],

	providers: [
		appRoutingProviders
	],

	bootstrap: [AppComponent]
})

export class AppModule{}