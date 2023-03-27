import { MenuComponent } from './../menu/menu.component';
import {Component, ViewChild, Type, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Input } from '@angular/core';
import { GraphWithMenuComponent } from '../graph-with-menu/graph-with-menu.component';

@Component({
  selector: 'app-graph-adder',
  templateUrl: './graph-adder.component.html',
  styleUrls: ['./graph-adder.component.css']
})
export class GraphAdderComponent {

  @Input() component : Type<any>;
  private id : number = 0;

  constructor(private resolver: ComponentFactoryResolver) { }

  @ViewChild('viewContainerRef', {read : ViewContainerRef}) 
  target: ViewContainerRef;

  componentsReferences = Array<ComponentRef<GraphWithMenuComponent>>()

  addNewGraph() {
    let childComponent = this.resolver.resolveComponentFactory(GraphWithMenuComponent);

    let childRed = this.target.createComponent(childComponent);

    childRed.instance.id = this.id;
    childRed.instance.parent = this;
    childRed.instance.component = this.component;

    this.id = this.id + 1;

    this.componentsReferences.push(childRed);
  }

  remove(key: number) {
    if (this.target.length < 1) return;

    let componentRef = this.componentsReferences.filter(
      x => x.instance.id == key
    )[0];

    console.log("Found item" + componentRef.instance.id);
    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.id !== key
    );

    console.log("remove from list");

    for(let i = this.target.length -1; i >= 0; i--)
    {
      this.target.detach(i);
    }

    for(let i = 0; i < this.componentsReferences.length; i++)
    {
      this.target.insert(this.componentsReferences[i].hostView);
    }
  }
}
