import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  subDisplayText: string= ""
  mainDisplayText: string= ""

  pressKey(c: any){

  }

  allClear(){

  }

  getAnswer(){

  }
}
