import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Charts
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineComponent } from './components/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
