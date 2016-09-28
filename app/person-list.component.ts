import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person.model';
import { PersonService } from './person.service';


@Component({
	selector: 'person-list',
	templateUrl: './person-page.template.html',
	styleUrls: ['./person-list.style.css'],
	providers: [PersonService]
})


export class PersonListComponent implements OnInit {
	ngOnInit(): void {
		this.getPeople();
	}

	constructor(
		private router: Router,
		private personService: PersonService) {};

	people: Person[];

	searchId: number;

	selectedPerson: Person;

	goToDetail(person: Person): void {
		let link = ['/person', person.id];
		this.router.navigate(link);
	}

	getPeople(): void {
		this.personService.getPeople()
			.then((people) => this.people = people);
	}

	personSelected(person: Person): void {
		this.selectedPerson = person;
	};

	findButtonClicked(id: number): void {
		for(let person of this.people) {
			if(id == person.id) {
				this.goToDetail(person);
			};
		};
		this.searchId = null;
	};
}