import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabComponentComponent } from './fab-component.component';

describe('FabComponentComponent', () => {
  let component: FabComponentComponent;
  let fixture: ComponentFixture<FabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
