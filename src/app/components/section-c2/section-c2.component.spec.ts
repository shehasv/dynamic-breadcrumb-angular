import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionC2Component } from './section-c2.component';

describe('SectionC2Component', () => {
  let component: SectionC2Component;
  let fixture: ComponentFixture<SectionC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
