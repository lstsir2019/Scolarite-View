import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEcritComponent } from './note-ecrit.component';

describe('NoteEcritComponent', () => {
  let component: NoteEcritComponent;
  let fixture: ComponentFixture<NoteEcritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteEcritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEcritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
