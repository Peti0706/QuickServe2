import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeglegesitoComponent } from './veglegesito.component';

describe('VeglegesitoComponent', () => {
  let component: VeglegesitoComponent;
  let fixture: ComponentFixture<VeglegesitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeglegesitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeglegesitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
