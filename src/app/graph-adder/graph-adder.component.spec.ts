import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAdderComponent } from './graph-adder.component';

describe('GraphAdderComponent', () => {
  let component: GraphAdderComponent;
  let fixture: ComponentFixture<GraphAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphAdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
