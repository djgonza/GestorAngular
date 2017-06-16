export class Library {
	
	private _id: string;
	private user: string;

	constructor (_id:string, user:string) {
		this._id = _id;
		this.user = user;
	}

	getId ():string {
		return this._id;
	}

	getUser ():string {
		return this.user;
	}

}