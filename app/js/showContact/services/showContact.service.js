'use strict';

module.exports = angular
    .module('app.showContact.service', [])
    .factory('ShowContactFactory', ShowContactFactory);

function ShowContactFactory($resource, API_URL) {
    return {
        GetContact: getContact
    };

    function getContact(id) {
        return $resource('', {}, {
            get: {
                method: "GET",
                url: API_URL + "contacts/" + id
            }
        })
    }

}