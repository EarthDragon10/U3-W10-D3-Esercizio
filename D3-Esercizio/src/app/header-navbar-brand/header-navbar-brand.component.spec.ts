import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavbarBrandComponent } from './header-navbar-brand.component';

describe('HeaderNavbarBrandComponent', () => {
  let component: HeaderNavbarBrandComponent;
  let fixture: ComponentFixture<HeaderNavbarBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavbarBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavbarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
