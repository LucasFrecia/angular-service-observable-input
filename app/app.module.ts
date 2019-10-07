import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloInputComponent } from './hello-input.component';
import { UserNameService } from './user-name.service';
import { HelloObservableComponent } from './hello-observable.component';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloInputComponent, HelloObservableComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ UserNameService ]
})
export class AppModule { }
