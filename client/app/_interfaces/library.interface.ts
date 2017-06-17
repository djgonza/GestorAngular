import { UserInterface, BookInterface } from './index';

export interface LibraryInterface {
	
	_id: string;
	user:UserInterface;
	books:BookInterface[];
	selectedBook:BookInterface;

}