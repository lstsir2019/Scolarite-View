import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursUpdateComponent } from './concours-update.component';

describe('ConcoursUpdateComponent', () => {
  let component: ConcoursUpdateComponent;
  let fixture: ComponentFixture<ConcoursUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcoursUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcoursUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
