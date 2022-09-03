import { LightningElement,api} from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import {FlowNavigationNextEvent} from 'lightning/flowSupport';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import Show_User__c from '@salesforce/schema/Show_User__c'; 
import First_Name from '@salesforce/schema/Show_User__c.Name'; 
import Middle_Name from '@salesforce/schema/Show_User__c.Middle_Name__c'; 
import Last_Name from '@salesforce/schema/Show_User__c.Last_Name__c'; 
import Email_Address from '@salesforce/schema/Show_User__c.Email_Address__c'; 
import Password from '@salesforce/schema/Show_User__c.Password__c'; 
import Confirm_Password from '@salesforce/schema/Show_User__c.Confirm_Password__c'; 
import DOB from '@salesforce/schema/Show_User__c.DOB__c';
import Address from '@salesforce/schema/Show_User__c.Address__c'; 
import Country from '@salesforce/schema/Show_User__c.Country__c'; 
import State from '@salesforce/schema/Show_User__c.State__c';
import City from '@salesforce/schema/Show_User__c.City__c';
import Phone_No from '@salesforce/schema/Show_User__c.Phone_No__c';
import Secret_Question from '@salesforce/schema/Show_User__c.Secret_Question__c';
import Secret_Answer from '@salesforce/schema/Show_User__c.Secret_Answer__c';
import {NavigationMixin} from 'lightning/navigation';
export default class RegistrationPage extends NavigationMixin(LightningElement){
    @api recordId;
    Show_User = Show_User__c;
    Name = First_Name;
    Middle_Name = Middle_Name;
    Last_Name = Last_Name;
    Email_Address = Email_Address;
    Password = Password ;
    Confirm_Password = Confirm_Password;
    DOB = DOB;
    Address = Address;
    Country = Country;
    State = State;
    City = City ;
    Phone_No = Phone_No;
    Secret_Question = Secret_Question
    Secret_Answer = Secret_Answer ;
    
    handleSuccess (event){
       this.recordId = event.detail.id;
    }
    handleNavigation() {
       this[NavigationMixin.Navigate]({
        type :'standard__objectPage',
        attributes: {
            
            objectApiName: 'Show_User__c',
            actionName: 'list'
        }
       });
      
    }
}