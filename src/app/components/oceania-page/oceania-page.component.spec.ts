import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaPageComponent } from './oceania-page.component';

describe('OceaniaPageComponent', () => {
  let component: OceaniaPageComponent;
  let fixture: ComponentFixture<OceaniaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceaniaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceaniaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
