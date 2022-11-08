import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fg-svg',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <use [attr.xlink:href]="link" [attr.href]="link" />
    </svg>
  `,
  styles: [],
})
export class SvgComponent {
  private _link = '';
  @Input() set name(name: string) {
    this._link = `/assets/icons/${name}.svg`;
  }

  get link() {
    return this._link;
  }
}
