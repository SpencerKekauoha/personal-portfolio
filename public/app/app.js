angular.module('portfolioApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'public/app/components/welcome/welcomeTmpl.html',
      controller: 'welcomeCtrl'
    })

    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'public/app/components/portfolio/portfolioTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('yui', {
      url: '/portfolio/yui',
      templateUrl: 'public/app/components/portfolio/yui/yuiTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('hana', {
      url: '/portfolio/hana',
      templateUrl: 'public/app/components/portfolio/hana/hanaTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('weather', {
      url: '/portfolio/weather',
      templateUrl: 'public/app/components/portfolio/weather/weatherTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('domo', {
      url: '/portfolio/domo',
      templateUrl: 'public/app/components/portfolio/domo/domoTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'public/app/components/about/aboutTmpl.html',
      controller: 'aboutCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'public/app/components/contact/contactTmpl.html'
    })

    $urlRouterProvider.otherwise('/welcome');


  })
