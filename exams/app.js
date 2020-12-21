(function () {
    'use strict';

    angular.module('cars', [])
        .controller('toBuyController', ToBuyController)
       
        .service('itemsService', ItemsService);

    ToBuyController.$inject = ['itemsService'];
    function ToBuyController(service) {
        var controller = this;
        controller.toBuyItems = service.getToBuyItems();

        controller.addToBought = function (itemIndex) { 
            service.addBoughtItem(itemIndex);
        }
    };

    BoughtController.$inject = ['itemsService'];
    function BoughtController(service) {
        var controller = this;
        controller.boughtItems = service.getBoughtItems();
    };

    function ItemsService() {
        var service = this;

  

        var toBuyItems = [
            new Item('Наявно автомобілів Ferrari:', 1, ),
            new Item('Наявно автомобілів Lada:', 20),
            new Item('Наявно автомобілів Merssedes:', 20),
            new Item('Наявно автомобілів Fiat:', 16),
            new Item('Наявно автомобілів Seat:', 10)
        ];

        service.addBoughtItem = function (shopItemId) {
            toBuyItems.splice(shopItemId, 1);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    };


    class Item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

})();