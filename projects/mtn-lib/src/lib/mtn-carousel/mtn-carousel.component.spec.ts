import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtnCarouselComponent } from './mtn-carousel.component';

describe('MtnCarouselComponent', () => {
  let component: MtnCarouselComponent;
  let fixture: ComponentFixture<MtnCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtnCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtnCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
