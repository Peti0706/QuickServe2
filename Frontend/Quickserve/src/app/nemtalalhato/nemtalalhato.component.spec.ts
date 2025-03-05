import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemtalalhatoComponent } from './nemtalalhato.component';

describe('NemtalalhatoComponent', () => {
  let component: NemtalalhatoComponent;
  let fixture: ComponentFixture<NemtalalhatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NemtalalhatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NemtalalhatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
