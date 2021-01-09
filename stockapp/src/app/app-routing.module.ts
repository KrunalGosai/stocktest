import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocklistComponent } from './components/stocklist/stocklist.component';

const routes: Routes = [{ path: '', component:StocklistComponent, pathMatch:"full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
