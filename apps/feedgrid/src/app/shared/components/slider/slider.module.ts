import { SharedModule } from '@/shared/shared.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { SliderDotsComponent } from './slider-dots/slider-dots.component';
import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SliderComponent, SliderDotsComponent],
  imports: [CommonModule, SharedModule, NgOptimizedImage],
  exports: [SliderComponent],
})
export class SliderModule {}
