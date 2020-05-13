/**
 * Created by nejka on 27/04/2020.
 */

public with sharing class BoatSearchResults {
    @AuraEnabled
public static List<Boat__c> getBoats(String boatTypeId){
    List<Boat__c> boats = new List<Boat__c>();
    if(String.isNotBlank(boatTypeId)){
   boats = [select id, name, Picture__c from Boat__c where BoatType__c =: boatTypeId];
    } else{
        boats = [select id, name, Picture__c from Boat__c];
    }
    return boats;
}
}