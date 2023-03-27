import { MenuComponent } from './../menu/menu.component';
import {Component, Type} from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent {
  public component : Type<any>;

  constructor()
  {
    this.component = MenuComponent;
  }
}
