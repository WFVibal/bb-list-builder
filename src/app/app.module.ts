import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { BbListComponent } from './bb-list/bb-list.component';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';

@NgModule({
  declarations: [
    AppComponent,
    BbListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    BsDropdownModule.forRoot(),
    BootstrapGridModule
  ],
  providers: [BbListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
