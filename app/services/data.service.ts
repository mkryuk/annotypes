import {IDataService} from "interfaces/iDataService";
import {IData} from "interfaces/iData";

export default class DataService implements IDataService {
  httpService: ng.IHttpService;
  static $inject = ["$http"];
  constructor($http: ng.IHttpService) {
    this.httpService = $http;
  }

  getAllData = () => {
    var res: Array<IData> = [
      { name: "One" },
      { name: "Two" },
      { name: "Three" }
    ];
    return res;
  }
} 