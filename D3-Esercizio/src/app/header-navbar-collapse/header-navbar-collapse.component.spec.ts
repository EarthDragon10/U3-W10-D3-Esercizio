import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavbarCollapseComponent } from './header-navbar-collapse.component';

describe('HeaderNavbarCollapseComponent', () => {
  let component: HeaderNavbarCollapseComponent;
  let fixture: ComponentFixture<HeaderNavbarCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavbarCollapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavbarCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
