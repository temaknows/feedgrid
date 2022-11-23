import { SliderModule } from '@/shared/components/slider/slider.module';
import { SvgComponent } from '@/shared/components/svg/svg.component';
import { SharedModule } from '@/shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridBlockComponent } from './grid-block/grid-block.component';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [GridComponent, GridBlockComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    SharedModule,
    GridRoutingModule,
    SliderModule,
    SvgComponent,
  ],
  exports: [GridComponent],
})
export class GridModule {}
