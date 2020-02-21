import { Component, OnInit } from '@angular/core';
import { LStorageService} from "../../services/CommonServices/localStorage/lstorage.service";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  teamForm: FormGroup;

  //index ;
  teamName = null ;
  teamLeader= {
    firstname : "",
    lastname : "" ,
    mail : "" ,
    phone : "" ,
    cv : ""
  } ;
  teamMember= [];
  index = 1 ;
  participent =[
    {
      firstname : "",
      lastname : "" ,
      mail : "" ,
      phone : "" ,
      cv : ""
    },
    {
      firstname : "",
      lastname : "" ,
      mail : "" ,
      phone : "" ,
      cv : ""
    },
    {
      firstname : "",
      lastname : "" ,
      mail : "" ,
      phone : "" ,
      cv : ""
    },{
      firstname : "",
      lastname : "" ,
      mail : "" ,
      phone : "" ,
      cv : ""
    },{
      firstname : "",
      lastname : "" ,
      mail : "" ,
      phone : "" ,
      cv : ""
    }
  ] 
  constructor(private localstorage : LStorageService,
    private fb: FormBuilder) { }

  ngOnInit() {


  }

  onCompleteForm( ){
    for ( var i:number = 1; i<this.index; i++){

    }
    this.index ++;
    if(this.index == 1){
   //   this.teamLeader = this.participent;
    }
    if(this.index > 1 && this.index < 6 ){
     // this.teamMember = this.teamForm;
    }
    if(this.index > 6){
      return console.log('you attempt the maximum of team members');
    }
    this.localstorage.storeOnLocalStorage(this.teamName ,this.teamLeader ,this.teamMember);
    this.teamName = null;
    this.teamLeader = null;
    this.teamMember= null;
  }
  setMembers(a){
    this.index = a ;
    this.teamMember =[];
    for ( var i:number = 0; i<this.index; i++){
      this.teamMember.push(this.participent[i]);
    } 
    console.log(this.teamMember);
}
  addTeam(){
    console.log(this.teamName);
    console.log(this.teamLeader);
    console.log(this.teamMember);
  }

}
