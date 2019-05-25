import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursInfoComponent } from './concours-info.component';

describe('ConcoursInfoComponent', () => {
  let component: ConcoursInfoComponent;
  let fixture: ComponentFixture<ConcoursInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcoursInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcoursInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
