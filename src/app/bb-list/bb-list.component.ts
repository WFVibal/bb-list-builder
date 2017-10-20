import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BBTeam } from './bb-list-team.component';

@Component({
  selector: 'app-bb-list',
  templateUrl: './bb-list.component.html',
  styleUrls: ['./bb-list.component.css']
})

@Injectable()
export class BbListComponent implements OnInit {

  public GetAll = (): Observable<any> => {
    return this._http.get(this.getAllActionUrl)
      .map((response: Response) => <any>response.json())
      .do(
        x => 
        console.log(x)
      );
  }

  public GetPlayers = (type: string): Observable<any> => {
    return this._http.get(this.getTeamPlayersUrl + '?typeName=' + type)
      .map((response: Response) => <any>response.json())
      .do(
        x => 
        console.log(x)
      );
  }

  private getAllActionUrl: string;
  private getTeamPlayersUrl: string;
  
  constructor(private _http: Http) { 
    this.getAllActionUrl = 'http://bblistapi.azurewebsites.net/teams/getteamtypes'; 
    this.getTeamPlayersUrl = 'http://bblistapi.azurewebsites.net/teams/getteamtypeinfo';
  }

  ngOnInit() {
  }

}
