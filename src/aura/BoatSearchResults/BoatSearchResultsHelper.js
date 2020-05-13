/**
 * Created by nejka on 27/04/2020.
 */

({
    onSearch: function (component) {
        let action = component.get("c.getBoats");
        action.setParams({  boatTypeId : "test"  })

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {


                let returnValue = response.getReturnValue();
                var result = response.getReturnValue().map(kampanja => ({ value: kampanja.Id, label: kampanja.Name }));
                console.log(result)
                if (Array.isArray(result) && result.length){
                    component.set("v.boatList", result);
                } else{
                    component.set("v.showError", true);
                }
                    //  cmp.set("v.optionList",result);

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
    }
});