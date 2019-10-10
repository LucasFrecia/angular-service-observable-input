import { Component, Input } from "@angular/core";
import { UserNameService } from "./user-name.service";

@Component({
  selector: "hello-observable",
  template: `
    <h1>Hello {{ name }}! Changed with observable</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloObservableComponent {
  public name: string;
  private _subscription_user_name$: any;

  constructor(private _userNameService: UserNameService) {
    this._subscription_user_name$ = this._userNameService.execChange.subscribe(
      value => {
        this.name = value;
      }
    );
  }
}
