/*============ CREATE THE docsApp MODULE AND REGISTER FACTORIES, DIRECTIVES, CONTROLLERS ============*/

angular.module('docsApp', [
    'ngResource', 'ngCookies', 'ngSanitize', 'ui.bootstrap', 'ngRoute',
    'docular.directives',
    'docular.services',
    'docular.controllers'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(useHtml5Mode).hashPrefix('');
    $routeProvider.when('/documentation/:group/index', {
        controller: 'GroupIndexController',
        templateUrl: 'resources/docular-partials/docular_partial_group_index.html'
    })
    $routeProvider.when('/documentation/:group/:section/:partial', {
        controller: 'DocumentationPageController',
        templateUrl: 'resources/docular-partials/docular_partial_documentation.html'
    })
    $routeProvider.when('/', {
        controller: 'HomepageController',
        templateUrl: 'resources/docular-partials/docular_partial_home.html'
    })
}]);