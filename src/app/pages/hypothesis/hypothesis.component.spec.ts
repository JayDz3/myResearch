import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypothesisComponent } from './hypothesis.component';

describe('HypothesisComponent', () => {
  let component: HypothesisComponent;
  let fixture: ComponentFixture<HypothesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypothesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypothesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
