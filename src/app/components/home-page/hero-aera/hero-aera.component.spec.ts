import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAeraComponent } from './hero-aera.component';

describe('HeroAeraComponent', () => {
  let component: HeroAeraComponent;
  let fixture: ComponentFixture<HeroAeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
