public with sharing class AddList {
    @AuraEnabled(cacheable=true)
    public static List<Insert_Add__c> queryAddList() {
    
      return [
          SELECT  Client__r.Name ,Id , Name FROM Insert_Add__c ORDER BY Name
          LIMIT 20
      ];
  }
  @AuraEnabled
  public static void deleteOpportunities(List<Insert_Add__c> oppList){
   delete oppList;
  }
}