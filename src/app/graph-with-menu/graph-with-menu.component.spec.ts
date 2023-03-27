import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphWithMenuComponent } from './graph-with-menu.component';

describe('GraphWithMenuComponent', () => {
  let component: GraphWithMenuComponent;
  let fixture: ComponentFixture<GraphWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphWithMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
