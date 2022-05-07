import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BejelentesekComponent } from './bejelentesek.component';

describe('BejelentesekComponent', () => {
  let component: BejelentesekComponent;
  let fixture: ComponentFixture<BejelentesekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BejelentesekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BejelentesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
