(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'dataApi'];
    function HomeController($log, dataApi) {
        var vm = this;

        vm.title = "Hello World ****"
        vm.data = [];
        

        activate();

        ////////////////

        function activate() {
                dataApi.getList().then(function(reponse){
                    vm.data = reponse.data;
                });

         }
    }
})();