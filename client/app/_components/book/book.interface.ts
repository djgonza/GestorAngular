import { Structure } from '../index';

export interface BookInterface {

	_id: string;
	name: string;
	library: string;
	structure: Structure[];

}