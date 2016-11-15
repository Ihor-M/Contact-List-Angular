'use strict';

module.exports = angular
    .module('app.contactList.service', [])
    .factory('ContactListFactory', ContactListFactory);

function ContactListFactory($resource, API_URL) {
    return {
        GetContactsList: getContactsList,
        CreateContact: createContact,
        UpdateContact: updateContact,
        DestroyContact: destroyContact
    };

    function getContactsList() {
        return $resource('', {}, {
            get: {
                method: "GET",
                url: API_URL + "contacts"
            }
        })
    }

    function createContact() {
        return $resource('', {}, {
            post: {
                method: "POST",
                url: API_URL + "contacts"
            }
        })
    }

    function updateContact(id) {
        return $resource('', {}, {
            update: {
                method: "PUT",
                url: API_URL + "contacts/:id", id: "@id"
            }
        })
    }

    function destroyContact(id) {
        return $resource('', {}, {
            destroy: {
                method: "DELETE",
                url: API_URL + "contacts/:id", id: "@id"
            }
        })
    }


}