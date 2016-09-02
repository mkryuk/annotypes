import {IDatabaseService} from "interfaces/iDatabaseService";
import {IData} from "interfaces/iData";

export default class DatabaseController {

  static $inject = ["databaseService"];
  data: Array<IData>;
  constructor(databaseService: IDatabaseService) {
    let dbCtrl = this;
    databaseService.getAllData()
      .then((data: any) => {
        dbCtrl.data = data;
      });
  }
}