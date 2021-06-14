import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTestComponentComponent } from './pipes-test-component.component';

describe('PipesTestComponentComponent', () => {
  let component: PipesTestComponentComponent;
  let fixture: ComponentFixture<PipesTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTestComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
