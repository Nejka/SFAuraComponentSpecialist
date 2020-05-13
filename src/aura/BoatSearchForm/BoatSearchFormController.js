/**
 * Created by nejka on 26/04/2020.
 */

({
    doInit: function (component, event, helper) {

        var isEnabled = $A.get("e.force:createRecord");

        //check if isEnabled is truthy
        if (isEnabled) {
            //we have a truthy reference from the get() method, that means we're good to go
            console.log('gumb se nastavi');
            component.set("v.showButton", true);
        }

        console.log('do init se kliče');
        var action = component.get("c.loadBoatTypes");

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('odgovor shanjevanje jebi se' + JSON.stringify(response.getReturnValue()));

                let returnValue = response.getReturnValue();
                var result = response.getReturnValue().map(kampanja => ({ value: kampanja.Id, label: kampanja.Name }));
                console.log(result)
                //  cmp.set("v.optionList",result);
                component.set("v.listOptions", result);
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);

    },

    createBoat: function (component, event, helper) {
        let typeId = null;
        typeId = component.find("selectBoat").get("v.value")
        console.log('selected boat type' + typeId);
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                "BoatType__c" : typeId,
            }
        });
        createRecordEvent.fire();
    },

    doSomething: function (component, event, helper) {
        alert(event.getParam('value'));
    },

    onFormSubmit: function (component, event, helper) {
        let typeId = null;
        typeId = component.find("selectBoat").get("v.values")
        console.log('selected boat type' + typeId);
        var submitForm = component.getEvent("FormSubmit");

        submitForm.setParams({ "formData.boatTypeId": typeId });
        console.log('subnmit form event on boat search form' + submitForm);
        console.log('typeId' + typeId);
        submitForm.fire();
    }
});