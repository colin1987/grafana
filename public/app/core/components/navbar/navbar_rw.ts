///<reference path="../../../headers/common.d.ts" />

import config from 'app/core/config';
import _ from 'lodash';
import $ from 'jquery';
import coreModule from '../../core_module';

export class NavbarRwCtrl {
  /** @ngInject */
  constructor(private $scope, private contextSrv) {
  }
}

export function navbarRwDirective() {
  return {
    restrict: 'E',
    templateUrl: 'public/app/core/components/navbar/navbar_rw.html',
    controller: NavbarRwCtrl,
    bindToController: true,
    transclude: true,
    controllerAs: 'ctrl',
    scope: {
      title: "@",
      titleUrl: "@",
      iconUrl: "@",
    },
    link: function(scope, elem, attrs, ctrl) {
      ctrl.icon = attrs.icon;
      elem.addClass('navbar');
    }
  };
}

coreModule.directive('navbarRw', navbarRwDirective);
