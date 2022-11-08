import { NgModule } from '@angular/core';

import { LetDirective } from './directives/let.directive';
import { TimesDirective } from './directives/times.directive';

@NgModule({
  imports: [LetDirective, TimesDirective],
  exports: [LetDirective, TimesDirective],
})
export class SharedModule {}
