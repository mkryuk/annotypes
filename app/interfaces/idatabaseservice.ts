import {IData} from "idata";
export interface IDatabaseService {
	getAllData: () => ng.IPromise<Array<IData>>;
}