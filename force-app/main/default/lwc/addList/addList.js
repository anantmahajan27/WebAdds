import { LightningElement,track,api, wire } from 'lwc';
import  queryAddList from '@salesforce/apex/AddList.queryAddList';
const COLS = [
   
    {

        label: "Add Name",
        fieldName: "Name",
        type: "text",
        sortable: "true"
      },
    {

      label: "Client Name",
      fieldName: "Client__c",
      type: "Master-Detail(Show Client)",
      sortable: "true"
    }
   ];
    
export default class AddList extends LightningElement {
 @track columns = COLS;
 @track Insert_Adds;

 @wire(queryAddList)
    wiredInsert_Adds(result){
        if (result.data){
            this.Insert_Adds = result.data;
            this.error = undefined;
        }else if(result.error){
            this.error =result.error;
            this.data = undefined;
            console.log("###ERROR : " + JSON.stringify(this.error));
        }
    }
 
}