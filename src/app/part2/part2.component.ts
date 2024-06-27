import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component  {
x150 :number = 0 ;
x100:number=0;
x8:number=0;

count150 : any = setInterval(()=> {
  this.x150++;
  if (this.x150 == 150) {
    clearInterval(this.count150);
  }
},50)
count100 : any = setInterval(()=> {
  this.x100++;
  if (this.x100 == 100) {
    clearInterval(this.count100);
  }
},50)
count8 : any = setInterval(()=> {
  this.x8++;
  if (this.x8 == 8) {
    clearInterval(this.count8);
  }
},100)
  
}
