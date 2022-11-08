import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BASE_URL } from './core/tokens';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'asdf',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
