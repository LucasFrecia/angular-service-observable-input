import { Component, Input } from '@angular/core';
import { UserNameService } from './user-name.service';

@Component({
  selector: 'hello-observable',
  template: `<h1>Hello {{name}}! Changed with observable </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloObservableComponent  {
  name: string;
  _subscription_user_name: any;

   constructor(private userNameService : UserNameService) {
        this._subscription_user_name = this.userNameService.execChange.subscribe((value) => {
            this.name= value;
        });
}
}
