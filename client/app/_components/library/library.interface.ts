import { User, Book } from '../index';

export interface LibraryInterface {
	
	_id: string;
	user:User;
	books:Book[];

}