import { User, Book } from '../_models/index';

export interface Library {
	
	_id: string;
	user: User;
	books:Book[];
	selectedBook:Book;

}