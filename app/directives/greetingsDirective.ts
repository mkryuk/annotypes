export class GreetingsDirective implements ng.IDirective {
    public restrict = "E";
    public template = "<h1>Hello {{data}}</h1";
    public scope = {
    };
    public link: ($scope: any, element: JQuery, attributes: ng.IAttributes) => void;

    constructor() {
        GreetingsDirective.prototype.link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            scope.data = "This is some data in class directive";
        };
    }
}
