///<reference path="../../../headers/common.d.ts" />

import config from 'app/core/config';
import _ from 'lodash';
import $ from 'jquery';
import coreModule from '../../core_module';

export class NavbarRoCtrl {
  /** @ngInject */
  constructor(private $scope, private contextSrv) {
  }
}

export function navbarRoDirective() {
  return {
    restrict: 'E',
    templateUrl: 'public/app/core/components/navbar/navbar_ro.html',
    controller: NavbarRoCtrl,
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

coreModule.directive('navbarRo', navbarRoDirective);
