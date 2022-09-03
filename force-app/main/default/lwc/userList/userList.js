import { LightningElement,track,api, wire } from 'lwc';
import queryUserList from '@salesforce/apex/UserList.queryUserList';
const COLS = [
    {
        label: "User ID",
        fieldName: "User_ID__c",
        sortable: "true"
    },
    {

      label: "First Name",
      fieldName: "Name",
      sortable: "true"
    }
   ];
    
export default class UserList extends LightningElement {
 @track columns = COLS;
 @track Show_Users;

 @wire(queryUserList)
    wiredShow_Users(result){
        if (result.data){
            this.Show_Users = result.data;
            this.error = undefined;
        }else if(result.error){
            this.error =result.error;
            this.data = undefined;
            console.log("###ERROR : " + JSON.stringify(this.error));
        }
    }
 
}