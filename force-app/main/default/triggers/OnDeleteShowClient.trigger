trigger OnDeleteShowClient on Show_Client__c (before delete) {
     for(Show_Client__C  add : [SELECT Id FROM Show_Client__C 
                             WHERE Id IN (SELECT  Client__C FROM Insert_Add__c) AND
                             Id IN :Trigger.old]){
        Trigger.oldMap.get(add.Id).addError(
            'Cannot Delete Client Related To Add ');
}
}