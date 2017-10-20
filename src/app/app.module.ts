import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { BbListComponent } from './bb-list/bb-list.component';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BbPlayerModalComponent } from './bb-player-modal/bb-player-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BbListComponent,
    BbPlayerModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    BsDropdownModule.forRoot(),
    BootstrapModalModule.forRoot({container:document.body}),
    BootstrapGridModule,
    BootstrapModalModule
  ],
  entryComponents: [
    BbPlayerModalComponent
  ],
  providers: [BbListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
