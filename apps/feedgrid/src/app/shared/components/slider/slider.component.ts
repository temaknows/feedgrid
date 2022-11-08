import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { take, timer } from 'rxjs';

@Component({
  selector: 'fg-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input()
  images: string[] = [];

  @Input()
  threshold = 0.4;

  private isDragging = false;
  private startX: number | null = null;

  private scrollLeft: number | null = null;

  private element: HTMLElement;
  private elementWidth = 0;

  public current = 0;

  @ViewChild('innerSlider')
  private readonly innerSlider!: ElementRef<HTMLElement>;

  constructor({ nativeElement }: ElementRef<HTMLElement>) {
    this.element = nativeElement;
  }

  ngOnInit(): void {
    timer(0)
      .pipe(take(1))
      .subscribe(() => {
        this.resize();
      });
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.startX =
      (event instanceof MouseEvent ? event.pageX : event.touches[0].pageX) -
      this.innerSlider.nativeElement.offsetLeft;

    this.scrollLeft = this.innerSlider.nativeElement.scrollLeft;
  }
  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  drag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging || this.startX === null || this.scrollLeft === null) {
      return;
    }
    event.preventDefault();
    const pageX =
      event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    const x = pageX - this.innerSlider.nativeElement.offsetLeft;
    const dist = x - this.startX;
    this.innerSlider.nativeElement.scrollLeft = Math.min(
      Math.max(this.scrollLeft - dist, 0),
      (this.images.length - 1) * this.elementWidth
    );
  }

  @HostListener('window:touchend')
  @HostListener('window:mouseup')
  endDrag() {
    if (!this.isDragging) {
      return;
    }

    this.autoScroll();

    this.isDragging = false;
    this.startX = null;
    this.scrollLeft = null;
  }

  @HostListener('window:resize')
  resize() {
    this.elementWidth = this.element.getBoundingClientRect().width;

    this.nav(this.current);
  }

  private autoScroll() {
    this.nav(
      Math.round(this.innerSlider.nativeElement.scrollLeft / this.elementWidth)
    );
  }

  nav(index: number) {
    this.current = index;

    this.innerSlider.nativeElement.scroll({
      left: this.current * this.elementWidth,
      top: 0,
      behavior: 'smooth',
    });
  }
}
