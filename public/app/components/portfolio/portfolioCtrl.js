angular.module('portfolioApp').controller('portfolioCtrl', function($scope, $stateParams) {

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
});
