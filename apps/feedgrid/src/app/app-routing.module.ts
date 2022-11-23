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
  {
    path: 'post',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./features/post/post.module').then((m) => m.PostModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
