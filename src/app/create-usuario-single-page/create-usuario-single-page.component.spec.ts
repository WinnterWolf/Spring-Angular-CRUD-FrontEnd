import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsuarioSinglePageComponent } from './create-usuario-single-page.component';

describe('CreateUsuarioSinglePageComponent', () => {
  let component: CreateUsuarioSinglePageComponent;
  let fixture: ComponentFixture<CreateUsuarioSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsuarioSinglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUsuarioSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
