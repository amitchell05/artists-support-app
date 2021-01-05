import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowPageComponent } from './slideshow-page.component';

describe('SlideshowPageComponent', () => {
  let component: SlideshowPageComponent;
  let fixture: ComponentFixture<SlideshowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideshowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
