angular.module('portfolioApp').directive('navDirective', function($state){

  return {
    restrict: 'A',
    templateUrl: 'public/app/components/nav/navTmpl.html',
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
});
