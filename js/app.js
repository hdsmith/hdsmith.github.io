angular.module('main', [])
.controller('MainCtrl', function($scope) {
  $scope.card = {
    title: 'NEW YORK AVE',
    rent:16,
    oneHouse:80,
    twoHouses:220,
    threeHouses:600,
    fourHouses:800,
    hotel:1000,
    mortgageValue:100,
    houses:100,
    hotels:100,
    plusHouses:4,
    collapsed:false
  };
  $scope.toggle = function(card) {
    card.collapsed = !card.collapsed;
  };
});