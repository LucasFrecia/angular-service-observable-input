import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { UserNameService } from './user-name.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy  {

  public userName = 'Angular 8';
  private _subscription_user_name$: any;

  constructor(private _userNameService : UserNameService) {
    this._subscription_user_name$ = this._userNameService.execChange.subscribe(
      value => {
        this.userName= value;
      }
    );
  }

  changeUserName(name: string) {
    this._userNameService.userNameChange(name);
  }

  ngOnDestroy() {
    this._subscription_user_name$.unsubscribe();
  }
}
