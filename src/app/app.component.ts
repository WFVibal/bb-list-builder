import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BbListComponent } from './bb-list/bb-list.component';
import { Observable } from 'rxjs/Observable';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BBTeam } from './bb-list/bb-list-team.component';
import { BBPlayer } from './bb-list/bb-list-player.component';
import { BbPlayerModalComponent } from './bb-player-modal/bb-player-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';

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
  constructor(private BbListService: BbListComponent, private dialogService: DialogService) { }

  title = 'Blood Bowl List Builder';
  teamTypeList: Observable<string[]>;
  teamServiceTypeList: Observable<BBTeam>;
  selectedTeamType: string = 'Amazon';
  selectedPlayerType: string = 'Add Player';
  playerSkillList: string = "";

  ngOnInit() {
    this.BbListService.GetAll()
      .subscribe(teamResult => this.teamTypeList = teamResult as Observable<string[]>);

    this.BbListService
      .GetPlayers('Amazon').subscribe(result => this.teamServiceTypeList = result);
  }

  public onTeamTypeChange(event, item): void {
    this.selectedTeamType = item;
    this.BbListService
      .GetPlayers(item).subscribe(result => this.teamServiceTypeList = result);
  }

  showConfirm(pt) {
    console.log(pt.Skill_List);
    let disposable = this.dialogService.addDialog(BbPlayerModalComponent, {
      title: 'Add new ' + this.selectedTeamType + ' player',
      message: 'Confirm message',
      playerType: pt,
    })
      // .subscribe((isConfirmed) => {
      //   //We get dialog result
      //   if (isConfirmed) {
      //     alert('accepted');
      //   }
      //   else {
      //     alert('declined');
      //   }
      // });
  }
}
