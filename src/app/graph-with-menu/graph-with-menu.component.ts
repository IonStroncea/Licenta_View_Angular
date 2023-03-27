import { LiveComponent } from './../live/live.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-graph-with-menu',
  templateUrl: './graph-with-menu.component.html',
  styleUrls: ['./graph-with-menu.component.css']
})
export class GraphWithMenuComponent {
  public id :number;
  public parent :LiveComponent;

  public SetId(id : number)
  {
    this.id = id;
    console.log(id);
  }
  constructor() 
  { 
  }
  public delete_me()
  {
    this.parent.remove(this.id);
  }
}
