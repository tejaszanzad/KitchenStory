import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditDishesComponent } from './add-and-edit-dishes.component';

describe('AddAndEditDishesComponent', () => {
  let component: AddAndEditDishesComponent;
  let fixture: ComponentFixture<AddAndEditDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndEditDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
