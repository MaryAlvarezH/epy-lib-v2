import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpyComponent } from './epy.component';

describe('EpyComponent', () => {
  let component: EpyComponent;
  let fixture: ComponentFixture<EpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
