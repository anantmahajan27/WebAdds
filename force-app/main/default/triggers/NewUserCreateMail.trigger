trigger NewUserCreateMail on Show_User__c (after insert) {
    if(Trigger.isInsert && Trigger.isAfter){
        NewUserRegistrationClass.sendEmail(trigger.new);
    }
}