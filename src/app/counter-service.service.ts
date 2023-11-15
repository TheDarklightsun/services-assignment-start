import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  inActiveToInactive = 0;
  inInactiveToActive = 0;

  incrementActiveToInactive(){
    this.inActiveToInactive++;
    console.log('Active To Inactive: ' + this.inActiveToInactive)
  }

  incrementInactiveToActive() {
    this.inInactiveToActive++;
    console.log('Inactive To Active: ' + this.inInactiveToActive);
  }
}
