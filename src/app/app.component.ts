import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display(): void {
    console.log('You clicked button');
  }

  title = 'Angular_Project_Demo';
}
