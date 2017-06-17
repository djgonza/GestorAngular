export interface BookInterface {

	_id: string;
	name: string;
	structure: StructureInterface[];

}

export interface StructureInterface {
	
	ref:string;
	valueType:string;
	name:string;
	_id:string;

}