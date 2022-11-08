import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[fgTimes]',
  standalone: true,
})
export class TimesDirective {
  @Input()
  set fgTimes(times: number) {
    this.view.clear();

    for (let i = 0; i < times; i++) {
      this.view.createEmbeddedView(this.template, { $implicit: i, index: i });
    }
  }

  constructor(
    private readonly view: ViewContainerRef,
    private readonly template: TemplateRef<unknown>
  ) {}
}
