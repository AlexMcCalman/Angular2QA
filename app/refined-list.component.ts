import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person.model';
import { PersonService } from './person.service';


@Component({
	selector: 'refined-list',
	templateUrl: './refined-list.template.html',
	styleUrls: ['./person-list.style.css'],
	providers: [PersonService]
})


export class RefinedListComponent implements OnInit {
	ngOnInit(): void {
		this.getPeople();
	}

	constructor(
		private personService: PersonService,
		private router: Router) {};

	people: Person[];

	searchFilter: string = '';

	selectedPerson: Person;

	goToDetail(person: Person): void {
		let link = ['/person', person.id];
		this.router.navigate(link);
	}

	getPeople(): void {
		this.personService.getPeople().then((people) => this.people = people);
	}

	personSelected(person: Person) {
		this.selectedPerson = person;
	};
}