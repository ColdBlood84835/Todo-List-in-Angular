import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToodsComponent } from './add-toods.component';

describe('AddToodsComponent', () => {
  let component: AddToodsComponent;
  let fixture: ComponentFixture<AddToodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToodsComponent]
    });
    fixture = TestBed.createComponent(AddToodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
