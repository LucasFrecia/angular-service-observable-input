import { Component, OnDestroy } from '@angular/core';
import { UserNameService } from './user-name.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnDestroy  {
  userName = 'Angular 5';
  _subscription_user_name: any;

  constructor(private userNameService : UserNameService) {
        this._subscription_user_name = this.userNameService.execChange.subscribe((value) => {
            this.userName= value;
        });
  }

  changeUserName(name: string) {
    this.userNameService.userNameChange(name);
  }

  ngOnDestroy() {
    this._subscription_user_name.unsubscribe();
  }
}
