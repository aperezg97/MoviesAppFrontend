import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardModalComponent } from './movie-card-modal.component';

describe('MovieCardModalComponent', () => {
  let component: MovieCardModalComponent;
  let fixture: ComponentFixture<MovieCardModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardModalComponent]
    });
    fixture = TestBed.createComponent(MovieCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
