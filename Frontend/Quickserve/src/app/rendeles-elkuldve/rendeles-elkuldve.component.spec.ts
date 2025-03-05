import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendelesElkuldveComponent } from './rendeles-elkuldve.component';

describe('RendelesElkuldveComponent', () => {
  let component: RendelesElkuldveComponent;
  let fixture: ComponentFixture<RendelesElkuldveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RendelesElkuldveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendelesElkuldveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
