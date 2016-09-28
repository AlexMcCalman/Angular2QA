import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from './person.model';
import { PersonService } from './person.service';


@Component({
	selector: 'person-detail',
	templateUrl: 'person-detail.template.html',
	providers: [PersonService]
})


export class PersonDetailComponent implements OnInit {

	constructor(
		private personService: PersonService,
		private route: ActivatedRoute) {}

	person: Person;

	goBack(): void {
		window.history.back();

	}
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {			
			let id = +params['id'];
			this.personService.getPerson(id).then(person => this.person = person);	
		});
	}
}