import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursListComponent } from './concours-list.component';

describe('ConcoursListComponent', () => {
  let component: ConcoursListComponent;
  let fixture: ComponentFixture<ConcoursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcoursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
