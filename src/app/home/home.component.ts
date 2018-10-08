import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './home.component.html'})
export class HomeComponent {

    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

}
