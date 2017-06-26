(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataApi', dataApi);

    dataApi.$inject = ['$http'];
    function dataApi($http) {
        var service = {
            getList:getList
        };
        
        return service;

        ////////////////
        function getList() {
            return $http.get('https://infinite-ridge-66367.herokuapp.com/api/play_lists');
         }
    }
})();