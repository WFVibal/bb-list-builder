import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BbListComponent } from './bb-list/bb-list.component';
import { Observable } from 'rxjs/Observable';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BbListComponent]
})

export class AppComponent implements OnInit {
  constructor(private BbListService: BbListComponent) { }

  title = 'Blood Bowl List Builder';
  teamTypeList: Observable<string[]>;
  teamPlayerTypeList: Observable<any>;
  selectedTeamType: string = 'Amazon';
  selectedPlayerType: string = 'Please select...';

  ngOnInit() {
    this.BbListService.GetAll()
      .subscribe(teamResult => this.teamTypeList = teamResult as Observable<string[]>);

    this.BbListService
      .GetPlayers('Amazon').subscribe(result => this.teamPlayerTypeList = result);
  }

  public onTeamTypeChange(event, item): void {
    this.selectedTeamType = item;
    this.BbListService
      .GetPlayers(item).subscribe(result => this.teamPlayerTypeList = result);
  }
}
