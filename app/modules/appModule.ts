import Router from "routes/appRoutes";
import {GreetingsDirective} from "directives/greetingsDirective";
import dataService from "services/dataService";
import databaseService from "services/databaseService";
import HomeController from "controllers/homeController";
import DatabaseController from "controllers/databaseController";

// import * as angular from "angular";

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