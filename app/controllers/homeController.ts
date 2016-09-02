import {IDataService} from "interfaces/iDataService";
import {IData} from "interfaces/iData";

export default class HomeController {

  static $inject = ["dataService"];
  data: Array<IData>;
  constructor(dataService: IDataService) {
    this.data = dataService.getAllData();
  }
}
