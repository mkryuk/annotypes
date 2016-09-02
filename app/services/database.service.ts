
import {IDatabaseService} from "interfaces/iDatabaseService";
import {IData} from "interfaces/iData";
// import * as sqlite3 from "sqlite3";
var sqlite3 = require("sqlite3").verbose();
export default class DatabaseService implements IDatabaseService {
  $q: ng.IQService;
  static $inject = ["$q"];
  private static dbPath: string = "./db/data.db";

  constructor($q: ng.IQService) {
    this.$q = $q;
    this.checkDatabase()
      .catch(() => {
        this.initDatabase();
      });
  }

  public checkDatabase(): ng.IPromise<any> {
    return this.$q((resolve, reject) => {

      var db = new sqlite3.Database(DatabaseService.dbPath, sqlite3.OPEN_READONLY, (err: any) => {
        if (err !== null) {
          console.log("database file does not exists");
          reject();
        }
        resolve();
      });

    });
  }

  private initDatabase(): ng.IPromise<any> {
    return this.$q((resolve, reject) => {
      var db = new sqlite3.Database(DatabaseService.dbPath,
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

      var lineReader = require("readline").createInterface({
        input: require("fs").createReadStream("./db/dbInit.sql")
      });

      lineReader.on("line", function (line: string) {
        // console.log(`call: ${line}`);
        db.serialize(function () {
          db.run(line, [], (error: any) => {
            console.log("ERROR: " + error.message);
          });
        });
      });

      // for query debugging purposes
      // db.on('trace', (sql) => {
      //     console.log(`-> ${sql}`);
      // });

      lineReader.on("close", () => {
        // console.log(`EOF`);
        db.close(function () {
          // sqlite3 has now fully committed the changes
          resolve();
        });
      });
    });
  }

  getAllData(): ng.IPromise<Array<IData>> {
    return this.$q(function (resolve: any, reject: any) {
      var result: Array<IData> = [];

      var db = new sqlite3.Database(DatabaseService.dbPath, sqlite3.OPEN_READONLY, (err: any) => {
        if (err !== null) {
          reject(err);
        }
      });

      db.each("SELECT name FROM data", function (err: any, row: any) {
        result.push({
          name: row.name
        });
      }, () => {
        resolve(result);
        db.close();
      });
    });
  }

}