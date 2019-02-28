import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSubscriptionComponent } from './make-subscription.component';

describe('MakeSubscriptionComponent', () => {
  let component: MakeSubscriptionComponent;
  let fixture: ComponentFixture<MakeSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
