import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterPipe' })

export class FilterPipe {
	transform(value: any, query: string): any {
		if(query == '') {
			return value;
		}

		if(query == null){
			return value;
		}

		if(query != undefined) {
			return value.filter((item) => item.name.toLowerCase().startsWith(query.toLowerCase()));
		}

		else {
			return value;
		}
	}
}