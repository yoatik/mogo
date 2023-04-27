import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-area',
  templateUrl: './counter-area.component.html',
  styleUrls: ['./counter-area.component.scss']
})
export class CounterAreaComponent {

  projectcount = 0;
  clientcount = 0;
  awardcount = 0;
  coffeecount = 0;
  memberscount =0;

  projectcountStop = setInterval(() => {
    this.projectcount++;
    if (this.projectcount == 42) {
      clearInterval(this.projectcountStop);
    }
  }, 30)

  clientcountStop = setInterval(() => {
    this.clientcount++;
    if (this.clientcount == 123) {
      clearInterval(this.clientcountStop);
    }
  }, 10)

  awardcountStop = setInterval(() => {
    this.awardcount++;
    if (this.awardcount == 15) {
      clearInterval(this.awardcountStop);
    }
  }, 30)
  
  coffeecountStop = setInterval(() => {
    this.coffeecount++;
    if (this.coffeecount == 99) {
      clearInterval(this.coffeecountStop);
    }
  }, 10)

  memberscountStop = setInterval(() => {
    this.memberscount++;
    if (this.memberscount == 24) {
      clearInterval(this.memberscountStop);
    }
  }, 30)

}
