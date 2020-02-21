import { Inject, Injectable } from "@angular/core";
import { environment } from './../../../environments/environment';
import {HttpClient , HttpHeaders } from "@angular/common/http";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storageconst 
const STORAGE_KEY = 'team';

@Injectable()

export class LStorageService {
  apiUrl = environment.apiUrl;
  token = environment.token;
  constructor(private http: HttpClient,@Inject(LOCAL_STORAGE) private storage: StorageService) { } 


  getToken() {

    const headers = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
    console.log(headers);
    const url = `${this.apiUrl}/authenticate`;
    this.http .post( url, { token: this.token }, { headers: headers }).subscribe((res)=> 
    {
      let val =JSON.parse(JSON.stringify(res)) ;
          
          localStorage.setItem("token", val.results.jwt);
          localStorage.setItem("tokenexp", val.results.expire_in);
          console.log(val.results.jwt);
    },
    (err)=> console.log(err));  
  }

  public storeOnLocalStorage(teamName? : string , teamLeader? , teamMember ? ): void {
          
    // get array of tasks from local storage
    const currentTeam = this.storage.get(STORAGE_KEY) || { token: this.token , team_members:[], name : teamName , team_leader :{} };       
    console.log(currentTeam);
    // push new task to array
      if(teamLeader){
       currentTeam.team_leader = teamLeader }
       
    if(teamMember){
     currentTeam.team_members.push(teamMember);    }
          // insert updated array to local storage
    this.storage.set(STORAGE_KEY, currentTeam);         
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
}
}

