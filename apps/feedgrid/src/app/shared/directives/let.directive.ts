import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface FgLetContext<T> {
  soLet: T;
  $implicit: T;
}

@Directive({
  selector: '[fgLet]',
  standalone: true,
})
export class LetDirective<T> {
  private hasView = false;

  private context: FgLetContext<T | null> = { soLet: null, $implicit: null };

  constructor(
    @Inject(ViewContainerRef) private viewContainer: ViewContainerRef,
    @Inject(TemplateRef) private templateRef: TemplateRef<FgLetContext<T>>
  ) {}

  @Input()
  set fgLet(value: T) {
    this.context.$implicit = this.context.soLet = value;
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef, this.context);
      this.hasView = true;
    }
  }

  static ngTemplateContextGuard<T>(
    _dir: LetDirective<T>,
    state: unknown
  ): state is LetDirective<Exclude<T, null | undefined>> {
    return true;
  }
}
