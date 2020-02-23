import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericasPageComponent } from './americas-page.component';

describe('AmericasPageComponent', () => {
  let component: AmericasPageComponent;
  let fixture: ComponentFixture<AmericasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
