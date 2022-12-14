import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';

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

    const customObservable=Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        if (count===2){
          observer.complete();}
        if(count>3){
          observer.error(new Error('count is greater than 3!'));
        }
        count++
      },1000); 
    });

    
    this.firstObsSubdcribtion=customObservable.subscribe(
      data=>{
      console.log(data);},
      error=>{console.log(error);
      alert(error.message)},
      ()=>{console.log('completed');},
      
    );

}
}
