import HomeController from "controllers/homeController";
import DatabaseController from "controllers/databaseController";

export default class Router {
  static $inject = ["$stateProvider", "$urlRouterProvider"];
  constructor($stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) {

    // for any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");
    //
    // now set up the states
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "app/views/home.html",
        controller: HomeController,
        controllerAs: "mainCtl"
      })
      .state("database", {
        url: "/database",
        templateUrl: "app/views/database.html",
        controller: DatabaseController,
        controllerAs: "dbCtrl"
      })
      .state("directive", {
        url: "/directive",
        templateUrl: "app/views/directive.html"
      })
      ;
  }
}