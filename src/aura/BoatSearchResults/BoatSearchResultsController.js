/**
 * Created by nejka on 27/04/2020.
 */

({
    doSearch: function (component, event, helper) {
        helper.onSearch(component);
    },
    search: function (component, event, helper) {
    this.doSearch(component);
}
});