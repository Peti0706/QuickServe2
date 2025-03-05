import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eladoi1Component } from './eladoi-1.component';

describe('Eladoi1Component', () => {
  let component: Eladoi1Component;
  let fixture: ComponentFixture<Eladoi1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Eladoi1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eladoi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
