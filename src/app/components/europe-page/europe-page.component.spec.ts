import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropePageComponent } from './europe-page.component';

describe('EuropePageComponent', () => {
  let component: EuropePageComponent;
  let fixture: ComponentFixture<EuropePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
