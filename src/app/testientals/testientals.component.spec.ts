import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestientalsComponent } from './testientals.component';

describe('TestientalsComponent', () => {
  let component: TestientalsComponent;
  let fixture: ComponentFixture<TestientalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestientalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestientalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
