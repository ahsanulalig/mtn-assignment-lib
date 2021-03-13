import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtnLibComponent } from './mtn-lib.component';

describe('MtnLibComponent', () => {
  let component: MtnLibComponent;
  let fixture: ComponentFixture<MtnLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtnLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtnLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
