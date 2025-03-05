import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendelesreszletesComponent } from './rendelesreszletes.component';

describe('RendelesreszletesComponent', () => {
  let component: RendelesreszletesComponent;
  let fixture: ComponentFixture<RendelesreszletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RendelesreszletesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendelesreszletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
