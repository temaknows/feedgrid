import { WINDOW } from '@/core/tokens';
import { DestroyService } from '@/shared/service/destroy.service';
import { AfterViewInit, Component, ElementRef, Inject, QueryList, ViewChildren } from '@angular/core';
import { debounceTime, fromEvent, takeUntil, throttleTime } from 'rxjs';

import { GridBlock } from './grid-block/grid-block.type';
import { GridList } from './grid.type';

@Component({
  selector: 'fg-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [DestroyService],
})
export class GridComponent implements AfterViewInit {
  rowHeight = 190;

  @ViewChildren('rowItem') rowItems!: QueryList<ElementRef>;

  list: GridList = [...new Array(1e3)]
    .map(() => ({
      url: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
      ],
      type: 'carousel',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    }))
    .reduce<GridList>((list, current, index) => {
      if (index % 3 === 0) {
        list.push([current] as GridList[number]);
      } else {
        list[list.length - 1].push(current as GridBlock);
      }
      return list;
    }, []);

  constructor(
    @Inject(WINDOW) private readonly window: Window,
    @Inject(DestroyService) private readonly destroy$: DestroyService
  ) {
    fromEvent(window, 'resize')
      .pipe(throttleTime(100), debounceTime(100), takeUntil(destroy$))
      .subscribe(this.updateRowHeight.bind(this));
  }

  ngAfterViewInit(): void {
    setTimeout(this.updateRowHeight.bind(this));
  }

  updateRowHeight() {
    console.log('update');

    this.rowHeight =
      (this.rowItems.first.nativeElement as HTMLElement).getBoundingClientRect()
        .height + 4;
  }
}
