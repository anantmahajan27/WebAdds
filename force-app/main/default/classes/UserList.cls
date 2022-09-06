public with sharing class UserList {
  @AuraEnabled(cacheable=true)
  public static List<Show_User__c> queryUserList() {
  
    return [
        SELECT 	User_ID__c,Id ,	Name FROM Show_User__c  ORDER BY Name
        
    ];
 
}
@AuraEnabled(cacheable=true)
  public static List<Insert_Add__c> queryAddList() {
  
    return [
        SELECT 	Add_Id__c,Id , Name FROM Insert_Add__c ORDER BY Name
        LIMIT 20
    ];
 
}
}