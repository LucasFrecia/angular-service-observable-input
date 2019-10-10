import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { UserNameService } from './user-name.service';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'hello-observable', 
  template: `
    <h1>Hello {{ subscription_user_name$ | async }}! Changed with observable</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloObservableComponent {
  
  public name: string;
  public subscription_user_name$: Observable<string>;

  constructor(private _userNameService: UserNameService) {
    this.subscription_user_name$ = this._userNameService
    .execChange
    .pipe(
      startWith('Angular 8'),
    );
  }
}
