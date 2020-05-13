/**
 * Created by nejka on 26/04/2020.
 */

public class recordTypeLoader {

    @AuraEnabled
public static List<BoatType__c>  loadBoatTypes(){

    return [select id, name from BoatType__c];
    }

}