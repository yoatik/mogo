import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageAreaComponent } from './blog-page-area.component';

describe('BlogPageAreaComponent', () => {
  let component: BlogPageAreaComponent;
  let fixture: ComponentFixture<BlogPageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPageAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
