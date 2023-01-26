import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesCartComponent } from './dishes-cart.component';

describe('DishesCartComponent', () => {
  let component: DishesCartComponent;
  let fixture: ComponentFixture<DishesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
