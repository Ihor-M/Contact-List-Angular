'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.contactList.component', [])
    .component('mainContactListComponent', {
        templateUrl: '/app/js/contactList/components/contactList.template.html',
        controller: MainContactListController
    });

function MainContactListController(ContactListFactory, Notification) {
    var ctrl = this;

    ContactListFactory.GetContactsList().get().$promise.then(function (response) {
        ctrl.contactList = response.allContacts;

        var respLength = Object.keys(ctrl.contactList).length;
        var i;
        var currDate = new Date();
        var currYear = currDate.getFullYear();

        for (i = 0; i < respLength; i++) {
            var dateStr = ctrl.contactList[i].birthday_date;
            var birthDate = new Date(dateStr);
            var birthDay = birthDate.getDate();
            var birthMonth = birthDate.getMonth() + 1;
            var birthdayCurrYear = currYear + '-' + birthMonth + '-' + birthDay;
            var birthdayCurrYearDate = new Date(birthdayCurrYear);
            var beforeFiveDays = new Date(birthdayCurrYear);
            var beforeTenDays = new Date(birthdayCurrYear);
            beforeFiveDays.setDate(beforeFiveDays.getDate() - 5);
            beforeTenDays.setDate(beforeTenDays.getDate() - 10);

            if (currDate >= beforeFiveDays && currDate <= birthdayCurrYearDate ) {
                ctrl.contactList[i].beforeFive = 'true';

            } else {
                ctrl.contactList[i].beforeFive = 'false';
            }

            if (currDate >= beforeTenDays && currDate <= birthdayCurrYearDate ) {
                ctrl.contactList[i].beforeTen =  'true';
            } else {
                ctrl.contactList[i].beforeTen = 'false';
            }

            if (ctrl.contactList[i].beforeFive == 'true') {
                ctrl.contactList[i].beforeTen = 'false'
            }
        }
    });


    ctrl.deleteContact = function(id)
    {
        ContactListFactory.DestroyContact(id).destroy().$promise.then(function (response) {
            if (response.allContacts) {
                Notification.success({
                    message: "<p class='bg-success' style='padding: 20px'>Contact was successfully deleted.<a href='#' " +
                    "class='close' data-dismiss='alert' aria-label='close'>&times;</a></p>",
                    delay: 500,
                    positionX: 'right',
                    positionY: 'bottom'
                });
                ctrl.contactList = response.allContacts;
            } else {
                Notification.warning({
                    message: "<p class='bg-danger' style='padding: 20px'>Can't delete.<a href='#' " +
                    "class='close' data-dismiss='alert' aria-label='close'>&times;</a></p>",
                    delay: 500,
                    positionX: 'right',
                    positionY: 'bottom'
                });
            }
        })
    };
}
