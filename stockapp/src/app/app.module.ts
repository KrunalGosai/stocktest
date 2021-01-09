import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocklistComponent } from './components/stocklist/stocklist.component';
import { LinechartComponent } from './components/linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    StocklistComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
