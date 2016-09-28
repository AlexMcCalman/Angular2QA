import { Injectable } from '@angular/core';

import { Person } from './person.model';
import { PEOPLE } from './people.data';

@Injectable()
export class PersonService {

	getPerson(id: number): Promise<Person> {
    return this.getPeople()
               .then(people => people.find(person => person.id === id));
  	}

	getPeople(): Promise<Person[]> {
		return Promise.resolve(PEOPLE);
	}

	addPerson(id: number, name: string, fact: string): void {
		let addedFact = fact || '';

		PEOPLE.push({id, name, fact});
	}

	removePerson(): void {}
}