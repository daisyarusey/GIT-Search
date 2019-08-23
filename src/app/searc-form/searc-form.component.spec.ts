import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcFormComponent } from './searc-form.component';

describe('SearcFormComponent', () => {
  let component: SearcFormComponent;
  let fixture: ComponentFixture<SearcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
