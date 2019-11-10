import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuteComponent } from './rute.component';

describe('RuteComponent', () => {
  let component: RuteComponent;
  let fixture: ComponentFixture<RuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
