import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionC1Component } from './section-c1.component';

describe('SectionC1Component', () => {
  let component: SectionC1Component;
  let fixture: ComponentFixture<SectionC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
