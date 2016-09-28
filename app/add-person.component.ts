import { Component, OnInit } from '@angular/core';

import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
	selector: 'add-person',
	templateUrl: 'add-person.template.html',
	providers: [PersonService]
})

export class AddPersonComponent implements OnInit {

	ngOnInit(): void {
		this.getPeople();
	}

	constructor(
		private personService: PersonService) {}

	newName: string;
	newFact: string;

	people: Person[];

	latestPerson(): Person {
		return this.people[this.people.length - 1];
	}

	generateId(): number {
		return (this.people[(this.people.length - 1)].id + 1);
	}

	addPerson(name: string, fact: string): void {
		if(name && (name != '')) {
			this.personService.addPerson(this.generateId(), name, fact);
		}
	}

	getPeople(): void {
		this.personService.getPeople()
			.then(people => this.people = people);
	}
}