import { IParent } from './../processes/IParent';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-with-date',
  templateUrl: './menu-with-date.component.html',
  styleUrls: ['./menu-with-date.component.css']
})
export class MenuWithDateComponent {
  public parent : IParent;

  Click(){
    this.parent.Notify("this");
  }
}
