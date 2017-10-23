import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { BBPlayer } from '../bb-list/bb-list-player.component';

export interface ConfirmModel {
  title:string;
  message:string;
  playerType: BBPlayer;
  skills: string;
}

@Component({  
    selector: 'confirm',
    templateUrl: './bb-player-modal.component.html',
    styleUrls: ['./bb-player-modal.component.css']
})

export class BbPlayerModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  playerType: BBPlayer;
  skills: string;
  
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
}