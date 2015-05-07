/**
 * Created by Piotr Górak on 2015-05-05.
 */
app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'This Month\'s Bestsellers';
    $scope.promo = "{'background-image':'url(https://www.google.com/images/srpr/logo4w.png)'}";
    $scope.johns = [
        {
            path: "{'background':'url(img/john.png) no-repeat center'}",
            name: "John Doe",
            position: "Founder & CEO"
        },
        {
            path: "{'background':'url(img/john2.png) no-repeat center'}",
            name: "John Doe",
            position: "CO- Founder"
        },
        {
            path: "{'background':'url(img/john3.png) no-repeat center'}",
            name: "John Doe",
            position: "Investor"
        }

    ]

}]);