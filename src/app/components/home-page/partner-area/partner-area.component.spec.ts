import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAreaComponent } from './partner-area.component';

describe('PartnerAreaComponent', () => {
  let component: PartnerAreaComponent;
  let fixture: ComponentFixture<PartnerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
