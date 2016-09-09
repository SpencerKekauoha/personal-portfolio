angular.module('portfolioApp', ['ui.router'])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: './app/components/welcome/welcomeTmpl.html',
      controller: 'welcomeCtrl'
    })

    .state('portfolio', {
      url: '/portfolio',
      templateUrl: './app/components/portfolio/portfolioTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('yui', {
      url: '/portfolio/yui',
      templateUrl: './app/components/portfolio/yui/yuiTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('hana', {
      url: '/portfolio/hana',
      templateUrl: './app/components/portfolio/hana/hanaTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('weather', {
      url: '/portfolio/weather',
      templateUrl: './app/components/portfolio/weather/weatherTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('domo', {
      url: '/portfolio/domo',
      templateUrl: './app/components/portfolio/domo/domoTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: './app/components/about/aboutTmpl.html',
      controller: 'aboutCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: './app/components/contact/contactTmpl.html'
    })

    $urlRouterProvider.otherwise('/welcome');


  }])

angular.module('portfolioApp').controller('mainCtrl', ["$scope", function($scope) {



}]);

angular.module('portfolioApp').service('mainService', function(){

});

// angular.module('portfolioApp').controller('aboutCtrl', function($scope, $stateParams) {
//
//   $(window).scroll(function(){
//     var winScroll = $(this).scrollTop();
//     if(winScroll > $('.about-header-container').offset().top + ($(window).height() / 2)) {
//       console.log('hit');
//       $('.intro-section').css('background-color', 'rgba(237,240,242,.5)');
//       $('.about-header').css('background-color', 'rgba(237,240,242,.5)');
//       $('.about-header').css({transition: '2s ease-in-out'});
//       $('.intro-section').css({transition: '2s ease-in-out'});
//     }
//   })
// });

angular.module('portfolioApp').directive('navDirective', ["$state", function($state){

  return {
    restrict: 'A',
    templateUrl: './app/components/nav/navTmpl.html',
    link: function(scope, element, attribute) {
      $('#toggle-nav').on('click', function(){
          $(this).toggleClass('active');
          $('#menu').toggleClass('open');
          $('main').toggleClass('hide');
      });
      $('.menu-list').on('click', '.nav-link',  function(e){
        $('#toggle-nav').trigger(e.type);
      });
    }
  };
}]);

angular.module('portfolioApp').controller('portfolioCtrl', ["$scope", "$stateParams", function($scope, $stateParams) {

  $(window).scroll(function(){
    var winScroll = $(this).scrollTop();
    if(winScroll > $('.port-vid-container').offset().top + ($(window).height() * 1)) {
      $('.port-header').css('background-color', 'rgba(88,147,176,.5)');
      $('.port-header').css({transition: '2s ease-in-out'});
    }
    if (winScroll > $('.port-hana-container').offset().top - ($(window).height() / 2)) {
      $('.port-header').css('background-color', 'rgba(237,240,242,.5)');
      console.log('hit');
    }
    if (winScroll > $('.port-weather-container').offset().top - ($(window).height() / 2)) {
      $('.port-header').css('background-color', 'rgba(88,147,176,.5)');
    }
    if (winScroll > $('.port-domo-container').offset().top - ($(window).height() / 2)) {
      $('.port-header').css('background-color', 'rgba(237,240,242,.5)');
    }
  });
}]);

angular.module('portfolioApp').controller('welcomeCtrl', function() {

    var tmax_optionsGlobal = {
        repeat: -1,
        repeatDelay: 0.65,
        yoyo: true
    };

    CSSPlugin.useSVGTransformAttr = true;

    var tl = new TimelineMax(tmax_optionsGlobal),
        path = 'svg *',
        stagger_val = 0.125,
        duration = 2.5;

    $.each($(path), function(i, el) {
        tl.set($(this), {
            x: '+=' + getRandom(100, 500),
            y: '+=' + getRandom(-250, 200),
            rotation: '+=' + getRandom(-720, 720),
            scale: 0,
            opacity: 0
        });
    });

    var stagger_opts_to = {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: Power4.easeInOut
    };

    tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

    var $svg = $('svg');
    $svg.hover(
        function() {
            tl.timeScale(0.15);
        },
        function() {
            tl.timeScale(1);
        });

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
});
