import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessfulAlertComponent } from './successful-alert/successful-alert.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessfulAlertComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
