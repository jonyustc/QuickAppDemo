import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMeComponent } from './color-me.component';

describe('ColorMeComponent', () => {
  let component: ColorMeComponent;
  let fixture: ComponentFixture<ColorMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
