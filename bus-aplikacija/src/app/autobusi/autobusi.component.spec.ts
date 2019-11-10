import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusiComponent } from './autobusi.component';

describe('AutobusiComponent', () => {
  let component: AutobusiComponent;
  let fixture: ComponentFixture<AutobusiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutobusiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutobusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
