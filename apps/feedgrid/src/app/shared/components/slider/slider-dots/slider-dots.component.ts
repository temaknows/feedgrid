import { isPresent } from '@/core/helpers';
import { DestroyService } from '@/shared/service/destroy.service';
import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { distinctUntilChanged, filter, fromEvent, map, takeUntil } from 'rxjs';

@Component({
  selector: 'fg-slider-dots',
  templateUrl: './slider-dots.component.html',
  styleUrls: ['./slider-dots.component.scss'],
  providers: [DestroyService],
})
export class SliderDotsComponent {
  @Input()
  dots = 0;

  @Input()
  current = 0;

  @Output()
  dotChanged = new EventEmitter<number>();

  touchActive = false;

  constructor(
    @Inject(DestroyService) private readonly destroy$: DestroyService,
    { nativeElement }: ElementRef<HTMLElement>
  ) {
    fromEvent(nativeElement, 'touchmove')
      .pipe(
        takeUntil(this.destroy$),
        filter(() => this.touchActive),
        map((event: Event) => {
          if (!(event instanceof TouchEvent)) {
            return null;
          }

          event.preventDefault();
          event.stopPropagation();
          const { clientX } = event.touches[0];

          const { top, height } = nativeElement.getBoundingClientRect();

          const target = document.elementFromPoint(clientX, top + height / 2);
          return isPresent(target)
            ? target.getAttribute('data-slider-dot')
            : null;
        }),
        filter(isPresent),
        map(Number),
        distinctUntilChanged()
      )
      .subscribe((idx) => this.dotChanged.emit(idx));
  }

  @HostListener('touchstart')
  touchStart() {
    this.touchActive = true;
  }

  @HostListener('window:touchend')
  touchEnd() {
    this.touchActive = false;
  }
}
