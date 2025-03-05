import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eladoi2Component } from './eladoi-2.component';

describe('Eladoi2Component', () => {
  let component: Eladoi2Component;
  let fixture: ComponentFixture<Eladoi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Eladoi2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eladoi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
