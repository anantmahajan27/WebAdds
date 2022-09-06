public with sharing class NewUserRegistrationClass {
    Public Static Void sendEmail(List<Show_User__c> lstUser){
        List<Messaging.Email> lstEmail = new  List<Messaging.Email>();
        for(Show_User__c user : lstUser){
            if(user.Email_Address__c != null){
                Messaging.SingleEmailMessage emailMsg = new   Messaging.SingleEmailMessage();
                String[] toAddress = new String[]{user.Email_Address__c};
                    emailMsg.setToAddresses(toAddress);
                String emailSub = 'Welcome' + ' ' + user.Name;
                emailMsg.setSubject(emailSub);
                String content = 'Hi,' + '' +  '<p/>'  + user.Email_Address__c + ' Is your UserName' + '<br/><br/>' + 
                    'And Your Psaawors is :-' + user.Password__c;
                emailMsg.setHtmlBody(content);
                lstEmail.add(emailMsg);
            }
        }
        Messaging.sendEmail(lstEmail);
    }
}