import Router from "routes/app.routes";
import {GreetingsDirective} from "directives/greetings.directive";
import dataService from "services/data.service";
import databaseService from "services/database.service";
import HomeController from "controllers/home.controller";
import DatabaseController from "controllers/database.controller";


export default function (appName: string) {
  angular.module(appName, ["ui.router", "ui.grid"])
    // .run(setupInjector)
    .config(Router)
    // directives
    .directive("greetings", () => new GreetingsDirective())
    // services
    .service("dataService", dataService)
    .service("databaseService", databaseService)
    // controllers
    .controller("HomeController", HomeController)
    .controller("DatabaseController", DatabaseController);

  angular
    .bootstrap(document.documentElement, [appName]);
}