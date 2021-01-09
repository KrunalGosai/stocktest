import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockstateService {

  private stockHistory:BehaviorSubject<any> = new BehaviorSubject([])

  constructor() { }

  public setStockHistory(value){
    this.stockHistory.next(value);
  }

  public getStockHistory(){
    return this.stockHistory.asObservable()
  }
}
