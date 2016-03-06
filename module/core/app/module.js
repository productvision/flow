'use strict';


angular.module('app', [
    'core.loader',
    'oc.lazyLoad',

    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ngAria',
    'ui.router',
    'ui.utils',
    'ui.load',
    'ui.bootstrap',
    'ui.jq',
    'pascalprecht.translate',
    'formly',
    'formlyBootstrap',

    'skeleton.crud',
    //'skeleton.calendar',
    //'skeleton.contacts',
    //'skeleton.thesaurus',

    'grolba.dashboard',
    'grolba.note',
    'grolba.network',
    'grolba.issue',
    'grolba.goal',
    'grolba.portal',

    'community.core',
    'community.customer',
    'community.pages',

    'Loopback'
]);