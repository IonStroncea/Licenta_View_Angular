import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWithDateComponent } from './menu-with-date.component';

describe('MenuWithDateComponent', () => {
  let component: MenuWithDateComponent;
  let fixture: ComponentFixture<MenuWithDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWithDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuWithDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
