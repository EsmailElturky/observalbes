import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  private firstObsSubdcribtion:Subscription;

  constructor() { }
  ngOnDestroy(): void {
    this.firstObsSubdcribtion.unsubscribe();
    }

  ngOnInit() {
    // this.firstObsSubdcribtion= interval(1000).subscribe(
    //   count=>{console.log(count)}
    // )
  }

}
