import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! Changed with @Input</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloInputComponent  {
   @Input() name: string;
}
