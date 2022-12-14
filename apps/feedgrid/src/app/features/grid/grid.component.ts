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

  list: GridList = this.generate(6);

  currentPage = 0;

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

  loadMore(index: number) {
    if (index > this.currentPage) {
      this.list = [...this.list, ...this.generate(6)];
      this.currentPage++;
    }

    console.log(this.currentPage);
  }

  private generate(times: number) {
    return [...new Array(times)]
      .map(() => ({
        url: [
          'https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCUXL05Ey9Zg5HlFMmEwvlDIbhxFSkua6-Vwiv7X4L9359R2fLCtgVGcU6JR3-Bd2xho&usqp=CAU',
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
  }
}
