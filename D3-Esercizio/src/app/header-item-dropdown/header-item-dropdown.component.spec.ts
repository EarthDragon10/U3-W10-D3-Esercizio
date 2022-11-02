import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItemDropdownComponent } from './header-item-dropdown.component';

describe('HeaderItemDropdownComponent', () => {
  let component: HeaderItemDropdownComponent;
  let fixture: ComponentFixture<HeaderItemDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderItemDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderItemDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
