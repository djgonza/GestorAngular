import { StructureInterface } from './index';

export class Structure implements StructureInterface {

	ref:string;
	valueType:string;
	name:string;
	_id:string;

	constructor (ref:string, valueType:string, name:string, _id:string) {
		this.ref = ref;
		this.valueType = valueType;
		this.name = name;
		this._id = _id;
	}

}