import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabLocationComponent } from './fab-location.component';

describe('FabLocationComponent', () => {
  let component: FabLocationComponent;
  let fixture: ComponentFixture<FabLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
