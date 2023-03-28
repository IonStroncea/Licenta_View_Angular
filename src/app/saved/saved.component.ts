import { MenuWithDateComponent } from './../menu-with-date/menu-with-date.component';
import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent {
  public component : Type<any>;

  constructor()
  {
    this.component = MenuWithDateComponent;
  }
}
