/**
 * Created by nejka on 27/04/2020.
 */

({
    onFormSubmit: function(component, event, helper) {
        var formData = event.getParam("formData");
        var boatSearch = component.find('BoatSearch');
        console.log('submit form boat search' + boatSearch);
        console.log('form data' + formData);

        boatSearch.search(boatSearch);

    },

});