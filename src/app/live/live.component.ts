import {Component, OnInit, TemplateRef, ViewChild, AfterViewInit, Inject, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { GraphWithMenuComponent } from '../graph-with-menu/graph-with-menu.component';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent {

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
