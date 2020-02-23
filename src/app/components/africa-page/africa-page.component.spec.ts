import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaPageComponent } from './africa-page.component';

describe('AfricaPageComponent', () => {
  let component: AfricaPageComponent;
  let fixture: ComponentFixture<AfricaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
