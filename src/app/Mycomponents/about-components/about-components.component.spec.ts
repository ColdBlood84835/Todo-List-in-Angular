import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentsComponent } from './about-components.component';

describe('AboutComponentsComponent', () => {
  let component: AboutComponentsComponent;
  let fixture: ComponentFixture<AboutComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponentsComponent]
    });
    fixture = TestBed.createComponent(AboutComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
