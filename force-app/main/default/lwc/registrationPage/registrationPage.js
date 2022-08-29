import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class RegistrationPage extends NavigationMixin(LightningElement) {
    @api recordId;
    handleSuccess (event){
        this.recordId = event.detail.id;
    }
    handleNavigation(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Show_User__c',
                actionName: 'list'
            }
        });
    }
}