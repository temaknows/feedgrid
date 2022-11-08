import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridModule } from './features/grid';
import { MainLayoutComponent } from './shared';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainLayoutComponent,
    loadChildren: () => GridModule,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
