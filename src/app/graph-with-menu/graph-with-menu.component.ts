import { MenuComponent } from './../menu/menu.component';
import { LiveComponent } from './../live/live.component';
import { Component, Input, ViewContainerRef, ViewChild, OnInit, Type } from '@angular/core';
import { GraphAdderComponent } from '../graph-adder/graph-adder.component';

@Component({
  selector: 'app-graph-with-menu',
  templateUrl: './graph-with-menu.component.html',
  styleUrls: ['./graph-with-menu.component.css']
})
export class GraphWithMenuComponent {
  public id :number;
  public parent :GraphAdderComponent;
  public component : Type<any>;

  public SetId(id : number)
  {
    this.id = id;
    console.log(id);
  }

  @ViewChild('menu', {read: ViewContainerRef}) target: ViewContainerRef;


  ngAfterViewInit()
  { 
    this.loadComponent();
  }


 loadComponent() {
    console.log('Here');
    const componentRef = this.target.createComponent<any>(this.component);
  }

  public delete_me()
  {
    this.parent.remove(this.id);
  }
}
