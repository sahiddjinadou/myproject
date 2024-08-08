import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  // template:`<p>jjj</p>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: string = '';
  dJour: string = '';
 
  // constructor(
  //   private myService: MyServiceService,
  //   private today: GetDateService
  // ) {}

  ngOnInit(): void {
  }
}
