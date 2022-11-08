import { Component, Input } from '@angular/core';

import { GridBlock } from './grid-block.type';

@Component({
  selector: 'fg-grid-block',
  templateUrl: './grid-block.component.html',
  styleUrls: ['./grid-block.component.scss'],
})
export class GridBlockComponent {
  @Input()
  data: GridBlock | null = null;
}
