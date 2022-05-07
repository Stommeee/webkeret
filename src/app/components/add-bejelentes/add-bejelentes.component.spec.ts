import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBejelentesComponent } from './add-bejelentes.component';

describe('AddBejelentesComponent', () => {
  let component: AddBejelentesComponent;
  let fixture: ComponentFixture<AddBejelentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBejelentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBejelentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
