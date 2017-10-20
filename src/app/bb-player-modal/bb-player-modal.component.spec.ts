import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPlayerModalComponent } from './bb-player-modal.component';

describe('BbPlayerModalComponent', () => {
  let component: BbPlayerModalComponent;
  let fixture: ComponentFixture<BbPlayerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbPlayerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbPlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
