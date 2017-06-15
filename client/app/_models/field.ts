export class Field {
	
	private _id: string;
	name: string;
	value:any;

	constructor (_id:string, name:string) {
		this._id = _id;
		this.name = name;
	}

	/* _id */
	getId ():string {
		return this._id;
	}

	/* Name */
	setName (name:string):void {
		this.name = name;
	}

	getName ():string {
		return this.name;
	}

}