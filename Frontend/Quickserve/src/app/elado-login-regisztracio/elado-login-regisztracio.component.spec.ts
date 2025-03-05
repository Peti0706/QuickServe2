import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EladoLoginRegisztracioComponent } from './elado-login-regisztracio.component';

describe('EladoLoginRegisztracioComponent', () => {
  let component: EladoLoginRegisztracioComponent;
  let fixture: ComponentFixture<EladoLoginRegisztracioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EladoLoginRegisztracioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EladoLoginRegisztracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
