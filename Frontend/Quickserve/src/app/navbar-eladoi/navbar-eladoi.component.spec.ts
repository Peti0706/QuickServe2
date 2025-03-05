import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEladoiComponent } from './navbar-eladoi.component';

describe('NavbarEladoiComponent', () => {
  let component: NavbarEladoiComponent;
  let fixture: ComponentFixture<NavbarEladoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarEladoiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEladoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
