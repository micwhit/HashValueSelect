import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashValueFormElementComponent } from './hash-value-form-element.component';

describe('HashValueFormElementComponent', () => {
  let component: HashValueFormElementComponent;
  let fixture: ComponentFixture<HashValueFormElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashValueFormElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashValueFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
