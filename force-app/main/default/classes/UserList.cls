public with sharing class UserList {
  @AuraEnabled(cacheable=true)
  public static List<Show_User__c> queryUserList() {
  
    return [
        SELECT 	User_ID__c,Id ,	Name FROM Show_User__c  ORDER BY Name
        
    ];
 
}

}