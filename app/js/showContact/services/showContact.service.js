'use strict';

module.exports = angular
    .module('app.showContact.service', [])
    .factory('ShowContactFactory', ShowContactFactory);

function ShowContactFactory($resource, API_URL) {
    return {
        GetContact: getContact,
        UpdateContact: updateContact
    };

    function getContact(id) {
        return $resource('', {}, {
            get: {
                method: "GET",
                url: API_URL + "contacts/" + id
            }
        })
    }

    function updateContact(id) {
        return $resource('', {}, {
            update: {
                method: "PUT",
                url: API_URL + "contacts/" + id
            }
        })
    }

}