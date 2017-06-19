import { UserInterface } from './index';

export class User implements UserInterface {

	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;

	constructor (_id:string, username:string, firstName: string, lastName: string, email: string, password: string) {
		this._id = _id;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}

}