import {IData} from "iData";
export interface IDatabaseService {
	getAllData: () => ng.IPromise<Array<IData>>;
}