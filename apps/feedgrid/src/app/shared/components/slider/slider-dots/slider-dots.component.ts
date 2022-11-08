import { isPresent } from '@/core/helpers';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { distinctUntilChanged, filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'fg-slider-dots',
  templateUrl: './slider-dots.component.html',
  styleUrls: ['./slider-dots.component.scss'],
})
export class SliderDotsComponent {
  @Input()
  dots = 0;

  @Input()
  current = 0;

  @Output()
  dotChanged = new EventEmitter<number>();

  touchActive = false;

  constructor({ nativeElement }: ElementRef<HTMLElement>) {
    fromEvent(nativeElement, 'touchmove')
      .pipe(
        map((event: Event) => {
          if (!(event instanceof TouchEvent)) {
            return null;
          }

          event.preventDefault();
          event.stopPropagation();
          const { clientX, clientY } = event.touches[0];
          const target = document.elementFromPoint(clientX, clientY);
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
