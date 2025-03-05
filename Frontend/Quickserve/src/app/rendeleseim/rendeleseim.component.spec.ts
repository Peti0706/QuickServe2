import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendeleseimComponent } from './rendeleseim.component';

describe('RendeleseimComponent', () => {
  let component: RendeleseimComponent;
  let fixture: ComponentFixture<RendeleseimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RendeleseimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendeleseimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
