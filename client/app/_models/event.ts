export class Event {

	private type:string;
	private data:any;

	constructor (type:string, data:any) {

		this.type = type;
		this.data = data;

	}

	getType ():string {
		return this.type;
	}

	getData ():any {
		return this.data;
	}

}