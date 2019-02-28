import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucomponentComponent } from './meucomponent.component';

describe('MeucomponentComponent', () => {
  let component: MeucomponentComponent;
  let fixture: ComponentFixture<MeucomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeucomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeucomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
