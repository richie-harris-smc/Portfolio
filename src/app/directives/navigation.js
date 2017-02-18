import $ from 'jquery';
window.jQuery = $;
import angular from 'angular';

class NavigationDirective {
  /* @ngInject */
  constructor($scope) {
    this.restrict = 'A';
    this.scope = true;
    console.log("constructor root", $scope);
  }

  link(scope) {
    scope.navTo = function (section) {
      const target = document.getElementById(section).offsetTop;
      $("html, body").animate({scrollTop: target}, 1000);
    };
  }
}

export const nav = 'nav';

angular
  .module('nav', [])
  .directive('navigation', ['$window', () => new NavigationDirective()]);
