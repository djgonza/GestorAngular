export class User {
	
	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;

	constructor (_id:string, username:string, firstName: string, lastName: string, email: string) {
		this._id = _id;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

}