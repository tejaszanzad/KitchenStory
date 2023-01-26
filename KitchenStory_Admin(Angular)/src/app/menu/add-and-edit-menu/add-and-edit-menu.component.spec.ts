import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditMenuComponent } from './add-and-edit-menu.component';

describe('AddAndEditMenuComponent', () => {
  let component: AddAndEditMenuComponent;
  let fixture: ComponentFixture<AddAndEditMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndEditMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
