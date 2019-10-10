import {
  Component,
  Input,
  ChangeDetectionStrategy
  } from '@angular/core';

@Component({
  selector: 'hello-input',
  template: `
    <h1>Hello {{ name }}! Changed with @Input</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloInputComponent {
  @Input() name: string;
}
