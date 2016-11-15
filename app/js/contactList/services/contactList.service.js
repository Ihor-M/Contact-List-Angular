'use strict';

module.exports = angular
    .module('app.contactList.service', [])
    .factory('ContactListFactory', ContactListFactory);

function ContactListFactory($resource, API_URL) {
    return {
        GetContactsList: getContactsList,
        GetContact: getContact,
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

    function getContact(id) {
        return $resource('', {}, {
            get: {
                method: "GET",
                url: API_URL + "contacts/:id", id: "@id"
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