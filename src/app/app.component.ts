import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  page: string = 'recipe';

  handleNav = (page) => {
    this.page = page;
  };

}
